# Feedback System Setup with Airtable

This portfolio includes a like/dislike feedback system that appears after 30 seconds and integrates with Airtable to store feedback data.

## Features

- **Automatic Popup**: Shows after 30 seconds if user hasn't voted
- **Duplicate Prevention**: Uses IP address stored in localStorage to prevent multiple votes
- **Vote Changing**: Users can change their vote (like to dislike or vice versa)
- **Persistent Feedback Button**: After voting, a floating feedback button allows re-voting
- **Airtable Integration**: All feedback is stored in Airtable with metadata

## Airtable Setup

### 1. Create an Airtable Base

1. Go to [Airtable](https://airtable.com) and create a new base
2. Create a table called "Feedback" (or any name you prefer)
3. Add the following fields:
   - `feedback` (Single select: "like", "dislike")
   - `ip_address` (Single line text)
   - `timestamp` (Date & time)
   - `page_url` (Single line text)
   - `user_agent` (Long text)

### 2. Get Your API Credentials

1. Go to [Airtable API](https://airtable.com/api)
2. Select your base to get the Base ID
3. Create a Personal Access Token:
   - Go to [Airtable Developer Hub](https://airtable.com/developers/web/api/introduction)
   - Create a new personal access token
   - Give it appropriate scopes (data.records:read, data.records:write)

### 3. Environment Variables

Create a `.env.local` file in your project root:

```bash
NEXT_PUBLIC_AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
NEXT_PUBLIC_AIRTABLE_TABLE_NAME=Feedback
NEXT_PUBLIC_AIRTABLE_API_KEY=patXXXXXXXXXXXXXX.XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## How It Works

### Timing

- Dialog appears automatically after 30 seconds
- Only shows if user hasn't voted before

### Duplicate Prevention

- IP address is fetched using ipify.org API
- Vote status is stored in localStorage
- Users can change their vote but can't vote multiple times with same choice

### Data Storage

The following data is sent to Airtable:

- Feedback type (like/dislike)
- User's IP address
- Timestamp
- Current page URL
- User agent string

### User Experience

1. User visits the site
2. After 30 seconds, feedback dialog appears at the top
3. User can like or dislike
4. Dialog disappears and shows success toast
5. Floating feedback button appears for future use
6. User can change their vote anytime via the floating button

## Privacy Notes

- IP addresses are collected only to prevent duplicate voting
- No personally identifiable information is stored
- Users are informed that IP addresses are stored
- Data is stored securely in Airtable

## Customization

You can customize the feedback dialog by editing:

- `components/feedback-dialog.tsx` - Main component
- Timing (change the 30000ms timeout)
- Styling and positioning
- Questions and button text
- Data fields sent to Airtable
