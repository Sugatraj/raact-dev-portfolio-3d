# Building a 3D Interactive Portfolio Website with React and Three.js

## Overview
This document provides a comprehensive roadmap for creating a 3D interactive portfolio website for a React developer, inspired by [WLT Design](https://wlt.design/). The portfolio will showcase your React skills through immersive 3D elements, using React for structure and Three.js for 3D rendering. The goal is to create a professional, engaging site that attracts high-value clients through innovative presentation.

## Industry Standards & Best Practices (2024)
- **Performance-First Approach**: Prioritize Core Web Vitals metrics (LCP, FID, CLS)
- **Progressive Enhancement**: Ensure basic functionality without 3D for broader accessibility
- **Mobile-First Design**: Design for mobile devices first, then enhance for larger screens
- **Modular Architecture**: Use component-based design with clear separation of concerns
- **TypeScript Integration**: Add type safety for better code quality and developer experience
- **Accessibility (a11y)**: Ensure the site is usable by people with disabilities (WCAG 2.1 AA)
- **Sustainable Web Design**: Optimize for reduced carbon footprint with efficient code and assets

## Inspiration: WLT Design
WLT Design has earned recognition on [Awwwards](https://www.awwwards.com/sites/wlt-design) and [CSS Design Awards](https://www.cssdesignawards.com/sites/wlt-design/45101/) for their exceptional 3D interactive websites. Their approach includes:

- **Immersive Experiences**: Captivating 3D visuals that respond to user interaction
- **High Performance**: Optimized loading and rendering for smooth user experience
- **Creative Storytelling**: Using 3D elements to narrate a brand's story
- **Professional Presentation**: Clean aesthetics with meticulous attention to detail
- **Interactivity**: Engaging hover effects, scroll-triggered animations, and clickable 3D objects
- **Client-Focused Solutions**: Delivering value that appeals to businesses seeking innovation

## Portfolio Concept

### Vision
A single-page portfolio website with React managing the UI and Three.js powering 3D interactivity. The site will feature distinct sections enhanced with 3D elements that showcase your React expertise.

### Key Features
- **3D Interactivity**: Models that respond to user actions (hover, click, scroll)
- **React Architecture**: Modular components with efficient state management
- **Responsive Design**: Seamless experience across all devices
- **Professional Polish**: Refined design demonstrating technical skill and creativity

### Website Structure
1. **Home/Landing Page**
   - **3D Element**: Rotating 3D logo or coding setup (laptop with animated code)
   - **Purpose**: Create immediate visual impact and introduce yourself

2. **About Me**
   - **3D Element**: 3D avatar or interactive skill visualization
   - **Purpose**: Present your skills and experience in an engaging way

3. **Projects**
   - **3D Element**: Interactive 3D models representing each project
   - **Purpose**: Showcase your work with visual context and details

4. **Contact**
   - **3D Element**: Animated 3D contact form or interactive elements
   - **Purpose**: Provide a memorable call-to-action for potential clients

## Modern Technology Stack (2024)
- **React 18+**: UI structure with concurrent rendering features
- **TypeScript**: Type safety and improved developer experience
- **Three.js**: 3D rendering foundation
- **React Three Fiber/Drei**: React components for Three.js integration
- **Vite**: Fast, modern build tool replacing Create React App
- **TanStack Router**: Type-safe routing for React applications
- **Tailwind CSS**: Utility-first CSS framework for responsive design
- **Framer Motion**: Animation library for smooth transitions
- **Zustand**: Lightweight state management
- **3D Models**: Assets from [Sketchfab](https://sketchfab.com/) in GLTF/GLB formats
- **Testing**: Vitest and React Testing Library

### Compatible Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "three": "^0.160.0",
    "@react-three/fiber": "^8.15.12",
    "@react-three/drei": "^9.92.7",
    "@tanstack/react-router": "^0.0.1-beta.230",
    "framer-motion": "^10.16.16",
    "zustand": "^4.4.7",
    "tailwindcss": "^3.4.0"
  },
  "devDependencies": {
    "typescript": "^5.3.3",
    "vite": "^5.0.10",
    "@vitejs/plugin-react": "^4.2.1",
    "vitest": "^1.0.4",
    "@testing-library/react": "^14.1.2",
    "@types/react": "^18.2.45",
    "@types/react-dom": "^18.2.18",
    "@types/three": "^0.160.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32",
    "gltf-pipeline": "^4.1.0"
  }
}
```

## Development Roadmap

### 1. Project Setup with Modern Tools
- Initialize project with Vite: `npm create vite@latest my-portfolio -- --template react-ts`
- Install dependencies: 
  ```bash
  npm install three @react-three/fiber @react-three/drei @tanstack/react-router framer-motion zustand
  npm install -D typescript @types/react @types/react-dom @types/three tailwindcss postcss autoprefixer
  ```
- Set up Tailwind CSS: `npx tailwindcss init -p`
- Configure TypeScript and linting

### 2. Project Structure (Following Domain-Driven Design)
```
src/
├── assets/           # Static assets and 3D models
├── components/       # Shared UI components
│   ├── ui/           # Basic UI elements
│   ├── layout/       # Layout components
│   └── three/        # Three.js specific components
├── features/         # Feature-based modules
│   ├── home/
│   ├── about/
│   ├── projects/
│   └── contact/
├── hooks/            # Custom React hooks
├── lib/              # Utility functions and third-party library wrappers
├── stores/           # Zustand state stores
├── types/            # TypeScript type definitions
└── App.tsx           # Main application component
```

### 3. Three.js Implementation with React Three Fiber
- Create a basic scene with camera, lighting, and renderer
- Implement responsive canvas with proper performance optimizations

```tsx
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import { Suspense } from 'react';

const ThreeScene: React.FC = () => {
  return (
    <div className="h-screen w-full">
      <Canvas
        shadows
        dpr={[1, 2]} // Dynamic pixel ratio for performance
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }} // Performance optimization
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight 
            position={[10, 10, 5]} 
            intensity={1} 
            castShadow 
            shadow-mapSize={[1024, 1024]}
          />
          
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#0088ff" />
          </mesh>
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            minPolarAngle={Math.PI / 4}
            maxPolarAngle={Math.PI / 2}
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeScene;
```

### 4. 3D Model Integration with Optimization
- Source optimized models from Sketchfab (CC0 or compatible licenses)
- Use draco compression for smaller file sizes
- Implement proper loading states and error handling

```tsx
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Group } from 'three';
import { useInView } from 'react-intersection-observer';

// Preload model for better performance
useGLTF.preload('/models/laptop.glb');

interface ModelProps {
  path: string;
  scale?: number;
  position?: [number, number, number];
}

const Model: React.FC<ModelProps> = ({ path, scale = 1, position = [0, 0, 0] }) => {
  const { scene } = useGLTF(path);
  const modelRef = useRef<Group>(null);
  
  // Only render when in view for performance
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false
  });
  
  // Animation loop
  useFrame((_, delta) => {
    if (modelRef.current && inView) {
      modelRef.current.rotation.y += delta * 0.2;
    }
  });
  
  return (
    <group ref={ref}>
      {inView && (
        <primitive 
          ref={modelRef}
          object={scene.clone()} 
          scale={scale} 
          position={position}
          dispose={null}
        />
      )}
    </group>
  );
};

export default Model;
```

### 5. Interactive Features with Performance Optimization
- Implement interaction using React state and Three.js events
- Optimize with proper throttling and debouncing
- Use Framer Motion for smooth transitions

```tsx
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { useSpring, animated } from '@react-spring/three';
import { throttle } from 'lodash-es';

const InteractiveModel: React.FC = () => {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  
  // Throttle hover events for performance
  const handlePointerOver = throttle(() => setHovered(true), 50);
  const handlePointerOut = throttle(() => setHovered(false), 50);
  
  // Use springs for smooth animations
  const props = useSpring({
    scale: clicked ? 1.5 : hovered ? 1.2 : 1,
    rotation: clicked ? [0, Math.PI, 0] : [0, 0, 0],
    config: { mass: 2, tension: 500, friction: 30 }
  });
  
  return (
    <motion.div 
      className="w-full h-[50vh]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Canvas>
        <animated.mesh
          scale={props.scale}
          rotation={props.rotation}
          onClick={() => setClicked(!clicked)}
          onPointerOver={handlePointerOver}
          onPointerOut={handlePointerOut}
        >
          <boxGeometry />
          <meshStandardMaterial color={hovered ? "#ff8800" : "#0088ff"} />
        </animated.mesh>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} />
      </Canvas>
    </motion.div>
  );
};

export default InteractiveModel;
```

### 6. State Management with Zustand
- Create a lightweight store for managing application state
- Implement proper state persistence where needed

```tsx
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface AppState {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  modelQuality: 'low' | 'medium' | 'high';
  setModelQuality: (quality: 'low' | 'medium' | 'high') => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      modelQuality: 'medium',
      setModelQuality: (quality) => set({ modelQuality }),
    }),
    {
      name: 'app-storage',
      partialize: (state) => ({ theme: state.theme, modelQuality: state.modelQuality }),
    }
  )
);
```

### 7. Performance Optimization Strategies
- Implement code splitting and lazy loading for components
- Use React Suspense for asynchronous operations
- Optimize 3D models with draco compression and LOD (Level of Detail)

```tsx
import { lazy, Suspense } from 'react';
import { createLazyFileRoute } from '@tanstack/react-router';
import { useAppStore } from '../stores/appStore';

// Lazy load heavy components
const LowQualityModel = lazy(() => import('../components/three/LowQualityModel'));
const MediumQualityModel = lazy(() => import('../components/three/MediumQualityModel'));
const HighQualityModel = lazy(() => import('../components/three/HighQualityModel'));

export const Route = createLazyFileRoute('/projects')({
  component: Projects,
});

function Projects() {
  const { modelQuality } = useAppStore();
  
  return (
    <div className="min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      
      <Suspense fallback={<div className="h-[50vh] flex items-center justify-center">Loading 3D Model...</div>}>
        {modelQuality === 'low' && <LowQualityModel />}
        {modelQuality === 'medium' && <MediumQualityModel />}
        {modelQuality === 'high' && <HighQualityModel />}
      </Suspense>
      
      {/* Project details */}
    </div>
  );
}
```

### 8. Accessibility Considerations
- Implement keyboard navigation for 3D elements
- Add ARIA attributes for screen readers
- Ensure sufficient color contrast and text alternatives

```tsx
// Accessible 3D control component
const AccessibleModelViewer: React.FC = () => {
  const [isRotating, setIsRotating] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  return (
    <div>
      <div 
        role="region"
        aria-label="3D Model Viewer"
        className="relative h-[50vh]"
      >
        <Canvas ref={canvasRef}>
          {/* 3D scene content */}
        </Canvas>
        
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={() => setIsRotating(!isRotating)}
            aria-pressed={isRotating}
          >
            {isRotating ? 'Pause Rotation' : 'Start Rotation'}
          </button>
          
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded"
            onClick={() => {/* Reset view */}}
            aria-label="Reset model view"
          >
            Reset View
          </button>
        </div>
      </div>
      
      {/* Text alternative */}
      <div className="sr-only">
        This is a 3D model of a laptop showing a code editor with React code.
        The model can be rotated using the controls below.
      </div>
    </div>
  );
};
```

### 9. Testing Strategy
- Implement unit tests with Vitest and React Testing Library
- Add performance testing with Lighthouse CI
- Create E2E tests with Playwright

```tsx
// Example test file: src/components/three/Model.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Model from './Model';

// Mock Three.js and React Three Fiber
vi.mock('@react-three/fiber', () => ({
  useFrame: vi.fn((callback) => callback({}, 0.1)),
  Canvas: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="canvas-mock">{children}</div>
  ),
}));

vi.mock('@react-three/drei', () => ({
  useGLTF: vi.fn(() => ({
    scene: { clone: () => ({ children: [] }) },
  })),
}));

describe('Model Component', () => {
  it('renders without crashing', () => {
    render(<Model path="/models/test.glb" />);
    expect(screen.getByTestId('canvas-mock')).toBeInTheDocument();
  });
});
```

### 10. Deployment and CI/CD
- Set up GitHub Actions for continuous integration
- Configure deployment to Vercel or Netlify
- Implement preview deployments for pull requests

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build-and-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
          cache: 'npm'
      - run: npm ci
      - run: npm run type-check
      - run: npm run lint
      - run: npm run test
      - run: npm run build
      
      # Performance testing
      - name: Lighthouse CI
        uses: treosh/lighthouse-ci-action@v9
        with:
          urls: |
            https://preview-url.vercel.app/
          uploadArtifacts: true
          temporaryPublicStorage: true
```

## Best Practices for Success

### Technical Excellence
- Implement proper code splitting and lazy loading
- Use TypeScript for type safety and better developer experience
- Follow the SOLID principles in component design
- Optimize 3D assets (draco compression, texture optimization)
- Implement progressive loading with proper fallbacks

### Design Considerations
- Use a design system for consistent UI components
- Implement dark/light mode with proper color contrast
- Design for mobile-first with responsive breakpoints
- Ensure 3D elements enhance rather than distract from content
- Use subtle animations that don't interfere with usability

### Performance Optimization
- Aim for <2 second initial load time (Core Web Vitals LCP)
- Implement proper code splitting and tree shaking
- Use WebP/AVIF for images and draco compression for 3D models
- Implement proper caching strategies
- Monitor performance with Lighthouse and Web Vitals

### Accessibility (a11y)
- Follow WCAG 2.1 AA guidelines
- Provide keyboard navigation for all interactive elements
- Include proper ARIA attributes for screen readers
- Ensure sufficient color contrast (minimum 4.5:1 ratio)
- Provide text alternatives for visual content

## Resources
- [Three.js Documentation](https://threejs.org/docs/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber)
- [React Three Drei](https://github.com/pmndrs/drei)
- [Sketchfab](https://sketchfab.com/) for 3D models
- [Vite Documentation](https://vitejs.dev/guide/)
- [TanStack Router](https://tanstack.com/router/latest)
- [Zustand State Management](https://github.com/pmndrs/zustand)
- [Framer Motion](https://www.framer.com/motion/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Web.dev Performance](https://web.dev/performance-scoring/)

## Notes
- Always check model licenses for attribution requirements
- Consider fallbacks for devices with limited 3D capabilities
- Document your process to create additional portfolio content
- Regularly update dependencies to maintain security and performance
- Use analytics to understand user behavior and optimize accordingly