
import {Link} from "react-router-dom"

// import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "./button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "./tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"
import { useLocation } from "react-router-dom"

const NavProps = {
  isCollapsed: true,
  links: [
    {
        title: "home",
        label: "label",
        // icon: LucideIcon,
        variant: "default" | "ghost",
        to: ""
      }
  ]
}

export function Nav(NavProps) {
    const {isCollapsed, links}= NavProps

    const location = useLocation()

  return (
    <TooltipProvider>
      <div
      data-collapsed={isCollapsed}
      className="group flex flex-col gap-4 py-2 data-[collapsed=true]:py-2"
    >
      <nav className="grid gap-1 px-2 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2">
        {links.map((link, index) =>
          isCollapsed ? (
            <Tooltip key={index} delayDuration={0}>
              <TooltipTrigger asChild>
                <Link
                  to= {link.to}
                  className={cn(
                    buttonVariants({ variant: location.pathname===link.to?'default':'ghost', size: "icon" }),
                    "h-9 w-9",
                    link.variant === "default" &&
                      "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
                  )}
                >
                  <link.icon className="h-4 w-4" />
                  <span className="sr-only">{link.title}</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right" className="flex items-center gap-4">
                {link.title}
                {link.label && (
                  <span className="ml-auto text-muted-foreground">
                    {link.label}
                  </span>
                )}
              </TooltipContent>
            </Tooltip>
          ) : (
            <Link
              key={index}
              to = {link.to}
              className={cn(
                buttonVariants({ variant: location.pathname===link.to?'default':'ghost', size: "sm" }),
                link.variant === "default" &&
                  "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
                "justify-start"
              )}
            >
              <link.icon className="mr-2 h-4 w-4" />
              {link.title}
              {link.label && (
                <span
                  className={cn(
                    "ml-auto",
                    link.variant === "default" &&
                      "text-background dark:text-white"
                  )}
                >
                  {link.label}
                </span>
              )}
            </Link>
          )
        )}
      </nav>
    </div>
    </TooltipProvider>
  )
}
