import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
  
  function AlertDialogComponent({children, action }) {
    const {
      id = null,
      text = 'This action cannot be undone. This will permanently delete your project and any information inside it.',
      CTA = 'Continue',
      actionFunction = () => {}
    } = action
    return (
        <AlertDialog>
        <AlertDialogTrigger>{children}</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              {text}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <div className="w-full items-center flex space-x-2">
            <AlertDialogAction onClick={() => actionFunction(id)} className='w-full bg-red-600 hover:bg-red-700'>{CTA}</AlertDialogAction>
            <AlertDialogCancel className='w-full'>Cancel</AlertDialogCancel>
            </div>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
      
    )
  }
  
  export default AlertDialogComponent