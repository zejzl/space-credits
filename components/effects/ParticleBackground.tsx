'use client';

import { useEffect, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export default function ParticleBackground() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = {
    background: {
      color: {
        value: 'transparent'
      }
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: true,
          mode: 'repulse'
        }
      },
      modes: {
        repulse: {
          distance: 80,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: ['#00f0ff', '#ff9500', '#7c3aed', '#ffffff']
      },
      links: {
        enable: false
      },
      move: {
        direction: 'none',
        enable: true,
        outModes: {
          default: 'out'
        },
        random: true,
        speed: 0.3,
        straight: false
      },
      number: {
        density: {
          enable: true,
          width: 1920,
          height: 1080
        },
        value: typeof window !== 'undefined' && window.innerWidth < 768 ? 40 : 80
      },
      opacity: {
        value: { min: 0.1, max: 0.5 },
        animation: {
          enable: true,
          speed: 0.5,
          sync: false
        }
      },
      shape: {
        type: 'circle'
      },
      size: {
        value: { min: 0.5, max: 1.5 }
      }
    },
    detectRetina: true,
    fullScreen: false
  };

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="absolute inset-0 -z-10"
    />
  );
}
