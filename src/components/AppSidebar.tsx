import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { MessageCirclePlus, MessageSquare } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";

import { gemini_icon } from "@/assets/assets.ts";

export default function AppSidebar() {
  const {open} = useSidebar()
  return (
    <>
      <Sidebar collapsible="icon" className="py-2">
        <SidebarHeader className="mb-4">
          <SidebarMenu className="">
            <SidebarMenuItem>
              <Avatar className="ml-2">
                <AvatarImage src={gemini_icon} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </SidebarMenuItem>

            <SidebarMenuItem className=" mt-2">
                <Button
                  variant={"default"}
                  className="w-full opacity-95 font-normal"
                >
                  <MessageCirclePlus />
                  {open? "New Chat": ""}
                </Button>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Recent Chats</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {Array.from({ length: 4 }).map((_, i) => {
                  return (
                    <SidebarMenuItem key={`Chat-${i+1}`}>
                      <SidebarMenuButton asChild>
                        <a href={""}>
                          <MessageSquare />
                          <span>{`Chat-${i+1}`}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
        <SidebarTrigger className="bg-sidebar border  rounded-bl-none rounded-tl-none mt-4"/>
    </>
  );
}

{
  /* <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <MessageSquare/>
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem> */
}
