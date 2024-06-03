<<<<<<< HEAD
import { logoutAccount } from "@/lib/actions/user.actions";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
=======
import { logoutAccount } from '@/lib/actions/user.actions'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
>>>>>>> 2404eb26005d83eb28b9b89387d4664b93b0d0ac

const Footer = ({ user, type = 'desktop' }: FooterProps) => {
  const router = useRouter();
<<<<<<< HEAD

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();
=======
>>>>>>> 2404eb26005d83eb28b9b89387d4664b93b0d0ac

  const handleLogOut = async () => {
    const loggedOut = await logoutAccount();

    if(loggedOut) router.push('/sign-in')
  }

  return (
    <footer className="footer">
<<<<<<< HEAD
      <div className={type === "mobile" ? "footer_name-mobile" : "footer_name"}>
        <p className="text-xl font-bold text-gray-700">{user?.name[0]}</p>
      </div>

      <div
        className={type === "mobile" ? "footer_email-mobile" : "footer_email"}
      >
        <h1 className="text-14 truncate text-gray-700 font-semibold">
          {user?.name}
        </h1>
        <p className="text-14 truncate font-normal text-gray-600">
          {user?.email}
        </p>
=======
      <div className={type === 'mobile' ? 'footer_name-mobile' : 'footer_name'}>
        <p className="text-xl font-bold text-gray-700">
          {user?.name[0]}
        </p>
      </div>

      <div className={type === 'mobile' ? 'footer_email-mobile' : 'footer_email'}>
          <h1 className="text-14 truncate text-gray-700 font-semibold">
            {user?.name}
          </h1>
          <p className="text-14 truncate font-normal text-gray-600">
            {user?.email}
          </p>
>>>>>>> 2404eb26005d83eb28b9b89387d4664b93b0d0ac
      </div>

      <div className="footer_image" onClick={handleLogOut}>
        <Image src="icons/logout.svg" fill alt="jsm" />
      </div>
    </footer>
  )
}

export default Footer