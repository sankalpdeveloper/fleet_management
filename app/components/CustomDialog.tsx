
import { Button } from '@/components/ui/button'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useState } from 'react'

const CustomDialog = ({ content, title = "", description = "", isOpen, setIsOpen }) => {
    const [Open, setOpen] = useState(false)

    return (
        <div className='my-2 flex align-text-bottom'>
            <Dialog open={isOpen}>
                <DialogContent>

                    <DialogHeader>
                        <DialogTitle>{title}</DialogTitle>
                        <DialogDescription>
                            {description}
                        </DialogDescription>

                    </DialogHeader>
                    {content}
                    <div className='flex space-x-4'>
                        <Button>Submit</Button>
                        <Button onClick={() => {
                            setIsOpen(false)
                        }}>Close</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default CustomDialog