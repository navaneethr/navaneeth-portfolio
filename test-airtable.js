// Test script to verify Airtable connection
// Run this with: node test-airtable.js

const baseId = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
const tableName = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME
const apiKey = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY

console.log("Testing Airtable connection...")
console.log("Base ID:", baseId ? `${baseId.slice(0, 10)}...` : "NOT SET")
console.log("Table Name:", tableName || "NOT SET")
console.log("API Key:", apiKey ? `${apiKey.slice(0, 10)}...` : "NOT SET")

if (!baseId || !tableName || !apiKey) {
  console.error("❌ Missing environment variables!")
  process.exit(1)
}

// Test API call
fetch(`https://api.airtable.com/v0/meta/bases/${baseId}/${tableName}`, {
  headers: {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  },
})
  .then((response) => {
    if (response.ok) {
      console.log("✅ Airtable connection successful!")
      return response.json()
    } else {
      console.error(
        "❌ Airtable connection failed:",
        response.status,
        response.statusText
      )
      return response.text()
    }
  })
  .then((data) => {
    if (typeof data === "string") {
      console.error("Error details:", data)
    } else {
      console.log("Table structure looks good!")
    }
  })
  .catch((error) => {
    console.error("❌ Network error:", error.message)
  })
