import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useStore = create(
  persist(
    (set) => ({
      // Theme
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      
      // Model Quality
      modelQuality: 'medium',
      setModelQuality: (quality) => set({ modelQuality }),
      
      // Loading State
      isLoading: false,
      setIsLoading: (isLoading) => set({ isLoading }),
      
      // Active Section
      activeSection: 'home',
      setActiveSection: (section) => set({ activeSection: section }),
    }),
    {
      name: 'portfolio-store',
      partialize: (state) => ({
        theme: state.theme,
        modelQuality: state.modelQuality,
      }),
    }
  )
)

export default useStore 