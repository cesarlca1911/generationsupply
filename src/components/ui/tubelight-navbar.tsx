import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
  activeTab?: string
  onTabChange?: (tabName: string) => void
}

export function TubelightNavbar({ items, className, activeTab: externalActiveTab, onTabChange }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(externalActiveTab || items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    if (externalActiveTab) {
      setActiveTab(externalActiveTab)
    }
  }, [externalActiveTab])

  const handleTabChange = (tabName: string) => {
    setActiveTab(tabName)
    onTabChange?.(tabName)
  }

  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-background/5 border border-border backdrop-blur-lg py-1 px-1 rounded-full shadow-lg overflow-visible",
        className,
      )}
    >
      {items.map((item) => {
        const Icon = item.icon
        const isActive = activeTab === item.name

        return (
          <Link
            key={item.name}
            to={item.url}
            onClick={() => handleTabChange(item.name)}
            className={cn(
              "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors overflow-visible",
              "text-foreground/80 hover:text-primary",
              isActive && "text-primary",
            )}
          >
            <span className="hidden md:inline">{item.name}</span>
            <span className="md:hidden">
              <Icon size={18} strokeWidth={2.5} />
            </span>
            {isActive && (
              <motion.div
                layoutId="tubelight"
                className="absolute inset-0 w-full rounded-full -z-10 overflow-visible"
                initial={false}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {/* Tubelight glow effect */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-primary rounded-t-full shadow-lg shadow-primary/60">
                  <div className="absolute w-16 h-8 bg-primary/30 rounded-full blur-lg -top-3 -left-3" />
                  <div className="absolute w-12 h-6 bg-primary/25 rounded-full blur-md -top-2 -left-1" />
                  <div className="absolute w-8 h-5 bg-primary/20 rounded-full blur-sm top-0 left-1" />
                </div>
                {/* Background glow */}
                <div className="absolute inset-0 bg-primary/5 rounded-full" />
              </motion.div>
            )}
          </Link>
        )
      })}
    </div>
  )
}
