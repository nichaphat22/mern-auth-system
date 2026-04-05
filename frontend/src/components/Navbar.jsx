import { BookA, BookOpen, LogOut, User } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { getData } from "@/context/userContext";

const Navbar = () => {
  const {user} = getData()
  console.log(user);
  
  return (
    <div className="p-2 border-b border-gray-200 bg-transparent">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-2 items-center">
          <BookOpen className="h-6 w-6 text-sky-800" />
          <h1 className="font-bold text-xl">
            <span className="text-sky-500">Notes</span>App
          </h1>
        </div>
        <div className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-lg font-semibold">
            <li>Features</li>
            <li>Pricing</li>
            <li>About</li>
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuItem><User/>Profile</DropdownMenuItem>
                    <DropdownMenuItem><BookA/>Notes</DropdownMenuItem>
                  </DropdownMenuGroup>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem ><LogOut/>Logout</DropdownMenuItem>       
                  </DropdownMenuGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to={"/login"}>
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
