import { NextResponse } from 'next/server';

// Instagram Graph APIを使用して最新の投稿を取得
async function fetchInstagramPosts() {
  try {
    const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN;
    const userId = process.env.INSTAGRAM_USER_ID;

    if (!accessToken || !userId) {
      console.warn('Instagram credentials not configured');
      return [];
    }

    // Instagram Graph APIで最新のメディアを取得
    const mediaUrl = `https://graph.instagram.com/${userId}/media?fields=id,caption,media_type,media_url,permalink,thumbnail_url,timestamp&access_token=${accessToken}&limit=6`;

    const response = await fetch(mediaUrl, {
      next: { revalidate: 3600 } // 1時間キャッシュ
    });

    if (!response.ok) {
      console.error('Instagram API error:', response.status, response.statusText);
      return [];
    }

    const data = await response.json();

    return (data.data || []).map(post => ({
      id: post.id,
      permalink: post.permalink,
      caption: post.caption || '',
      media_type: post.media_type,
      media_url: post.media_url,
      thumbnail_url: post.thumbnail_url,
      timestamp: post.timestamp
    }));
  } catch (error) {
    console.error('Instagram fetch error:', error);
    return [];
  }
}

// X API v2を使用して最新のツイートを取得
async function fetchXPosts() {
  try {
    const bearerToken = process.env.X_BEARER_TOKEN;
    const username = process.env.X_USERNAME || 'soara_hpa';

    if (!bearerToken) {
      console.warn('X (Twitter) credentials not configured');
      return [];
    }

    // まずユーザーIDを取得
    const userResponse = await fetch(
      `https://api.twitter.com/2/users/by/username/${username}`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        next: { revalidate: 3600 } // 1時間キャッシュ
      }
    );

    if (!userResponse.ok) {
      console.error('X API user lookup error:', userResponse.status);
      return [];
    }

    const userData = await userResponse.json();
    const userId = userData.data?.id;

    if (!userId) {
      console.error('X user ID not found');
      return [];
    }

    // ユーザーの最新ツイートを取得
    const tweetsResponse = await fetch(
      `https://api.twitter.com/2/users/${userId}/tweets?max_results=6&tweet.fields=created_at,public_metrics&exclude=retweets,replies`,
      {
        headers: {
          'Authorization': `Bearer ${bearerToken}`,
        },
        next: { revalidate: 3600 } // 1時間キャッシュ
      }
    );

    if (!tweetsResponse.ok) {
      console.error('X API tweets error:', tweetsResponse.status);
      return [];
    }

    const tweetsData = await tweetsResponse.json();

    return (tweetsData.data || []).map(tweet => ({
      id: tweet.id,
      text: tweet.text,
      created_at: tweet.created_at,
      url: `https://x.com/${username}/status/${tweet.id}`,
      public_metrics: tweet.public_metrics
    }));
  } catch (error) {
    console.error('X fetch error:', error);
    return [];
  }
}

export async function GET() {
  try {
    const [instagramPosts, xPosts] = await Promise.all([
      fetchInstagramPosts(),
      fetchXPosts()
    ]);

    return NextResponse.json({
      instagram: instagramPosts.slice(0, 3),
      x: xPosts.slice(0, 3),
      lastUpdated: new Date().toISOString()
    });
  } catch (error) {
    console.error('Social feeds error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch social feeds' },
      { status: 500 }
    );
  }
}
