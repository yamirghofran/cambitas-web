import { PopoverTrigger, PopoverContent, Popover } from "@/components/ui/popover"

export default function NotificationsPopover({ children }) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notifications</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">You have 5 new notifications.</p>
          </div>
          <div className="grid gap-2">
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-semibold">New comment on your post</h3>
                <p className="text-sm text-gray-500">
                  John Doe replied to your comment: "Great post! Thanks for sharing."
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-semibold">New follower</h3>
                <p className="text-sm text-gray-500">Jane Smith started following you.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-semibold">Profile update</h3>
                <p className="text-sm text-gray-500">Your profile information has been successfully updated.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-semibold">Security alert</h3>
                <p className="text-sm text-gray-500">New sign-in to your account from an unrecognized device.</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="h-10 w-10 rounded-full bg-gray-200" />
              <div className="flex-1 space-y-1">
                <h3 className="text-sm font-semibold">Subscription renewed</h3>
                <p className="text-sm text-gray-500">Your premium subscription has been renewed for another year.</p>
              </div>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

