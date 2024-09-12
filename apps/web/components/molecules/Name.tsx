import { HTMLAttributes } from 'react'
import { Resume } from '../../types'
import { cn } from '@cv/lib'
import Link from 'next/link'

interface Props extends HTMLAttributes<HTMLDivElement> {
   resume: Resume
}

export const Name = ({ resume, className, ...rest }: Props) => {
   return (
      <div className={cn('w-full flex flex-col', className)} {...rest}>
         <Link
            href={resume.nameLink}
            target="_blank"
            className="text-2xl mb-1.5 font-bold  hover:underline"
         >
            {resume.name}
         </Link>
      </div>
   )
}
