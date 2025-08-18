"use client"

import { useEffect, useState } from "react"
import { ThumbsDown, ThumbsUp, X } from "lucide-react"

import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const AIRTABLE_BASE_ID = process.env.NEXT_PUBLIC_AIRTABLE_BASE_ID
const AIRTABLE_TABLE_NAME = process.env.NEXT_PUBLIC_AIRTABLE_TABLE_NAME
const AIRTABLE_API_KEY = process.env.NEXT_PUBLIC_AIRTABLE_API_KEY

export function FeedbackDialog() {
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [hasVoted, setHasVoted] = useState<"like" | "dislike" | null>(null)
  const { toast } = useToast()

  // Get user's IP address
  const getUserIP = async (): Promise<string> => {
    try {
      const response = await fetch("https://api.ipify.org?format=json")
      const data = await response.json()
      return data.ip
    } catch (error) {
      console.error("Error fetching IP:", error)
      return "unknown"
    }
  }

  // Check if user has already voted
  useEffect(() => {
    const checkVoteStatus = () => {
      const storedVote = localStorage.getItem("portfolio-feedback")
      if (storedVote) {
        setHasVoted(storedVote as "like" | "dislike")
      }
    }

    // Show dialog after 30 seconds if user hasn't voted
    // TEMPORARILY DISABLED - Uncomment to re-enable feedback modal
    // const timer = setTimeout(() => {
    //   checkVoteStatus()
    //   if (!localStorage.getItem("portfolio-feedback")) {
    //     setIsVisible(true)
    //   }
    // }, 30000)

    // return () => clearTimeout(timer)
  }, [])

  // Submit feedback to Airtable
  const submitFeedback = async (feedback: "like" | "dislike") => {
    if (!AIRTABLE_BASE_ID || !AIRTABLE_TABLE_NAME || !AIRTABLE_API_KEY) {
      toast({
        title: "Configuration Error",
        description: "Airtable configuration is missing.",
        variant: "destructive",
      })
      return
    }

    setIsSubmitting(true)

    try {
      const userIP = await getUserIP()
      const timestamp = new Date().toISOString()

      const response = await fetch(
        `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${AIRTABLE_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              feedback: feedback,
              ip_address: userIP,
              timestamp: timestamp,
              page_url: window.location.href,
              user_agent: navigator.userAgent,
            },
          }),
        }
      )

      if (response.ok) {
        // Store vote in localStorage
        localStorage.setItem("portfolio-feedback", feedback)
        setHasVoted(feedback)
        setIsVisible(false)

        toast({
          title: "Thank you!",
          description: `Your ${feedback} has been recorded.`,
        })
      } else {
        throw new Error("Failed to submit feedback")
      }
    } catch (error) {
      console.error("Error submitting feedback:", error)
      toast({
        title: "Error",
        description: "Failed to submit feedback. Please try again.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Allow changing vote if user wants to
  const changeVote = (newFeedback: "like" | "dislike") => {
    if (hasVoted && hasVoted !== newFeedback) {
      submitFeedback(newFeedback)
    } else if (!hasVoted) {
      submitFeedback(newFeedback)
    }
  }

  // Show feedback dialog
  const showFeedbackDialog = () => {
    setIsVisible(true)
  }

  if (!isVisible) {
    // TEMPORARILY DISABLED - Uncomment to re-enable floating feedback button
    // return hasVoted ? (
    //   <Button
    //     onClick={showFeedbackDialog}
    //     className="fixed bottom-4 right-4 z-50 rounded-full shadow-lg"
    //     size="sm"
    //     variant="outline"
    //   >
    //     💭 Feedback
    //   </Button>
    // ) : null
    return null
  }

  return (
    <>
      {/* Overlay */}
      <div className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm" />

      {/* Feedback Dialog */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md px-4">
        <Card className="shadow-lg border-2">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">
                How do you like my portfolio?
              </CardTitle>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsVisible(false)}
                className="h-8 w-8 p-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <CardDescription>
              Your feedback helps me improve. This will only take a second!
              {hasVoted && (
                <span className="block mt-2 text-sm text-muted-foreground">
                  You previously {hasVoted === "like" ? "liked" : "disliked"}{" "}
                  this portfolio. You can change your vote if you want.
                </span>
              )}
            </CardDescription>
          </CardHeader>

          <CardContent>
            <div className="flex gap-3">
              <Button
                onClick={() => changeVote("like")}
                disabled={isSubmitting}
                variant={hasVoted === "like" ? "default" : "outline"}
                className="flex-1"
              >
                <ThumbsUp className="mr-2 h-4 w-4" />
                {hasVoted === "like" ? "Liked" : "Like"}
              </Button>

              <Button
                onClick={() => changeVote("dislike")}
                disabled={isSubmitting}
                variant={hasVoted === "dislike" ? "destructive" : "outline"}
                className="flex-1"
              >
                <ThumbsDown className="mr-2 h-4 w-4" />
                {hasVoted === "dislike" ? "Disliked" : "Dislike"}
              </Button>
            </div>

            <p className="text-xs text-muted-foreground mt-3 text-center">
              Your IP address is stored to prevent duplicate votes.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
