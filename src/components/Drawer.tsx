
import { useState } from 'react'
import { Spin as Hamburger } from 'hamburger-react'
import { Drawer } from "vaul";
import Nav from "@/components/Nav"
import SocialMediaContacts from "@/components/SocialMediaContacts"


export default function Navbar({ children }) {
  const [showDrawer, setShowDrawer] = useState(false)
  return (
    <Drawer.Root direction="left" open={showDrawer} onOpenChange={(val) => {
      // alert(val)
      setShowDrawer(val)
    }}>
      <Drawer.Trigger asChild>
        <Hamburger toggled={showDrawer} toggle={setShowDrawer} size={23} />
      </Drawer.Trigger>
      <Drawer.Portal>
        <div className="relative z-[100]">
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed left-0 top-0 h-full w-[80%] bg-white dark:bg-black text-primary p-6 mobile flex flex-col justify-between">
            <Nav />
            <div className="flex justify-center">
              <SocialMediaContacts />
            </div>
          </Drawer.Content>
        </div>
      </Drawer.Portal>
    </Drawer.Root>
  );
}