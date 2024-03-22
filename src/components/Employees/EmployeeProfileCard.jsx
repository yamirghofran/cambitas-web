import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { CardContent, Card } from "@/components/ui/card"
import ProfilePicture from "@/assets/images/profiles/cambitas-profile-1.png";

export default function EmployeeProfileCard() {
  return (
    <Card className="w-full bg-white shadow-sm p-0">
      <CardContent className="w-full grid grid-cols-10 py-4">        
        <div className="col-span-2 flex flex-col items-center justify-center h-full w-full">
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Avatar className="h-32 w-32">
              <AvatarImage alt="Olivia Rhye" src={ProfilePicture} />
              <AvatarFallback>OR</AvatarFallback>
            </Avatar>
            <div className="flex flex-col items-center mt-2">
              <h3 className="text-lg font-semibold">Olivia Rhye</h3>
              <p className="text-sm text-gray-500">Manager</p>
            </div>
          </div>
        </div>
        <div className="col-span-8 flex flex-col">
          <div className="w-full h-full mt-6">
            <h4 className="text-sm font-semibold text-gray-700">About</h4>
            <p className="text-sm text-gray-600 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo justo vitae eros ultrices, sed
              ultricies leo efficitur. Sed dui quam, auctor ac volutpat nec, interdum ut nibh. Proin sed velit
              hendrerit, facilisis arcu eu, iaculis nisl. Curabitur in sagittis enim.
            </p>
          </div>
          <hr className="border-gray-200 mb-6" />
          <div className="flex space-x-10">
            <div className="flex items-center space-x-2">
              <PhoneIcon className="text-green-500" />
              <div>
                <h5 className="text-sm font-semibold text-gray-700">PHONE NUMBER</h5>
                <p className="text-sm text-gray-600">+1 302 426 5043</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <MailIcon className="text-blue-500" />
              <div>
                <h5 className="text-sm font-semibold text-gray-700">EMAIL ADDRESS</h5>
                <p className="text-sm text-gray-600">olivia@untitledui.com</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}