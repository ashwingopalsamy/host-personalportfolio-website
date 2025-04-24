"use client"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"
import { useToast } from "@/hooks/use-toast"

export function Toaster() {
  const { toasts, dismiss } = useToast()

  return (
      <div className="fixed top-0 right-0 z-[100] flex flex-col items-end p-4 gap-2">
        <AnimatePresence>
          {toasts.map((toast) => (
              <motion.div
                  key={toast.id}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 100 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                      "flex items-center justify-between p-4 rounded-lg shadow-lg w-full max-w-sm",
                      toast.variant === "destructive"
                          ? "bg-destructive text-destructive-foreground"
                          : "bg-background text-foreground",
                  )}
              >
                <div className="flex flex-col gap-1">
                  <h3 className="font-medium">{toast.title}</h3>
                  {toast.description && <p className="text-sm opacity-90">{toast.description}</p>}
                </div>
                <button
                    onClick={() => dismiss(toast.id)}
                    className="ml-4 p-1 rounded-full hover:bg-black/10 dark:hover:bg-white/10"
                    aria-label="Close toast"
                >
                  <X className="h-4 w-4" />
                </button>
              </motion.div>
          ))}
        </AnimatePresence>
      </div>
  )
}
