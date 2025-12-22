import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const About = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const missionCardsRef = useRef([]);
  const teamCardsRef = useRef([]);
  const statsRef = useRef(null);
  const statsItemsRef = useRef([]);
  const timelineRef = useRef(null);
  const ctaRef = useRef(null);
  const floatingElementsRef = useRef([]);

    function createParticles() {
    const particlesContainer = document.querySelector('.particles-container');
    if (!particlesContainer) return;

    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-green-500 rounded-full';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.opacity = Math.random() * 0.5;
      
      gsap.to(particle, {
        x: gsap.utils.random(-50, 50),
        y: gsap.utils.random(-50, 50),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: Math.random() * 2
      });

      particlesContainer.appendChild(particle);
    }
  };
  useEffect(() => {

    gsap.fromTo(titleRef.current,
      { opacity: 0, y: 50, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "back.out(1.7)" }
    );

    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.to(el, {
          y: index % 2 === 0 ? 20 : -20,
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }
    });

    missionCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100, scale: 0.8 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    });

    teamCardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(card,
          { rotationY: 90, opacity: 0, scale: 0.5 },
          {
            rotationY: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse"
            },
            ease: "back.out(1.2)"
          }
        );

        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            duration: 0.3,
            ease: "power2.out"
          });
        });
      }
    });

    if (statsRef.current) {
      ScrollTrigger.create({
        trigger: statsRef.current,
        start: "top 80%",
        onEnter: () => {
          statsItemsRef.current.forEach((item, index) => {
            if (item) {
              const target = parseInt(item.dataset.target);
              gsap.to(item, {
                innerHTML: target,
                duration: 2,
                snap: { innerHTML: 1 },
                ease: "power2.out",
                delay: index * 0.2
              });
            }
          });
        }
      });
    }

    if (timelineRef.current) {
      const timelineItems = timelineRef.current.querySelectorAll('.timeline-item');
      timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
          { opacity: 0, x: index % 2 === 0 ? -100 : 100 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              toggleActions: "play none none reverse"
            },
            delay: index * 0.1
          }
        );
      });
    }

    if (ctaRef.current) {
      gsap.to(ctaRef.current, {
        scale: 1.05,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut"
      });
    }

    createParticles();

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);



  return (
    <div className="relative min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
      <div className="particles-container absolute inset-0 overflow-hidden" />

      <section ref={heroRef} className="relative py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                About Razer
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              For Gamers. By Gamers.™
            </p>
          </div>

          <div className="relative h-64 mb-20">
            <div ref={el => floatingElementsRef.current[0] = el} className="absolute top-10 left-10 w-16 h-16 border-2 border-green-500 rounded-lg animate-pulse" />
            <div ref={el => floatingElementsRef.current[1] = el} className="absolute top-20 right-20 w-12 h-12 border-2 border-blue-500 rounded-full" />
            <div ref={el => floatingElementsRef.current[2] = el} className="absolute bottom-10 left-1/3 w-20 h-20 border-2 border-purple-500 rotate-45" />
            <div ref={el => floatingElementsRef.current[3] = el} className="absolute bottom-20 right-1/4 w-8 h-8 border-2 border-pink-500 rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-green-400">Our Story</h2>
              <p className="text-gray-300 text-lg mb-4">
                Founded in 2005, Razer began as a company with a singular mission: to create the ultimate gaming experience for gamers worldwide.
              </p>
              <p className="text-gray-300 text-lg">
                Today, we're a global lifestyle brand for gamers, with a mission to provide the best gaming gear, software, and community for gamers.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-green-900/30 to-blue-900/30 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="text-6xl font-bold text-green-400 mb-4">18+</div>
                <p className="text-gray-300">Years of Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">Our Mission & Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Pushing boundaries in gaming technology and design",
                icon: "🚀"
              },
              {
                title: "Quality",
                description: "Delivering products that exceed expectations",
                icon: "🏆"
              },
              {
                title: "Community",
                description: "Building and supporting the global gaming community",
                icon: "🌍"
              }
            ].map((value, index) => (
              <div
                key={index}
                ref={el => missionCardsRef.current[index] = el}
                className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl hover:shadow-green-500/20 transition-all duration-300 hover:border-green-500 group cursor-pointer"
              >
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section ref={statsRef} className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-purple-400">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150M+", label: "Gamers Worldwide", color: "from-green-400 to-emerald-500" },
              { value: "1000+", label: "Team Members", color: "from-blue-400 to-cyan-500" },
              { value: "200+", label: "Products", color: "from-purple-400 to-pink-500" },
              { value: "80+", label: "Countries", color: "from-yellow-400 to-orange-500" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  ref={el => statsItemsRef.current[index] = el}
                  data-target={stat.value.replace('+', '')}
                  className={`text-5xl md:text-6xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                >
                  0
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-pink-400">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Mouad Ennaciri", role: "CEO & Founder", desc: "Visionary leader and passionate gamer" },
              { name: "Abdelkhalek Ligflam", role: "COO", desc: "Operational excellence expert" },
              { name: "Marouane Zgoura", role: "CTO", desc: "Tech innovation pioneer" },
               { name: "Mohammed raquibi", role: "CTO", desc: "Tech innovation pioneer" }
            ].map((member, index) => (
              <div
                key={index}
                ref={el => teamCardsRef.current[index] = el}
                className={`relative ${index===3?'left-[110%]':''} bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl transform-gpu preserve-3d perspective-1000 cursor-pointer`}
              >
                <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2 text-green-400">{member.name}</h3>
                <p className="text-blue-400 text-center mb-4">{member.role}</p>
                <p className="text-gray-300 text-center">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">Our Journey</h2>
          <div ref={timelineRef} className="relative">

            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-green-500 via-blue-500 to-purple-500" />
            
            {[
              { year: "2005", event: "Razer founded in San Diego", side: "left" },
              { year: "2007", event: "Razer DeathAdder mouse launched", side: "right" },
              { year: "2011", event: "Razer Blade laptop introduced", side: "left" },
              { year: "2013", event: "Razer Synapse software released", side: "right" },
              { year: "2020", event: "Expanded into gaming chairs", side: "left" },
              { year: "2023", event: "AI-powered gaming tools", side: "right" }
            ].map((item, index) => (
              <div
                key={index}
                className={`timeline-item mb-12 ${item.side === 'left' ? 'mr-auto pr-12 md:pr-0 md:mr-1/2 md:text-right' : 'ml-auto pl-12 md:pl-0 md:ml-1/2'}`}
                style={{ maxWidth: '45%' }}
              >
                <div className="relative">
                  <div className={`absolute ${item.side === 'left' ? 'right-0 md:-right-6' : 'left-0 md:-left-6'} top-1/2 transform -translate-y-1/2 w-4 h-4 bg-green-500 rounded-full border-4 border-gray-900`} />
                  <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700">
                    <div className="text-2xl font-bold text-green-400 mb-2">{item.year}</div>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Join the <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Razer Community</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Be part of the revolution that's changing gaming forever.
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button
              ref={ctaRef}
              className="px-8 py-4 bg-gradient-to-r from-green-500 to-blue-600 text-white font-bold rounded-full text-lg hover:shadow-2xl hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
            >
              Explore Careers
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-green-500 text-green-400 font-bold rounded-full text-lg hover:bg-green-500/10 transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <div className="absolute bottom-0 left-0 w-full h-32 overflow-hidden opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute text-green-400 font-mono text-sm"
            style={{
              left: `${Math.random() * 100}%`,
              animation: `matrix-rain ${1 + Math.random() * 2}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          >
            {Math.random().toString(2).substring(2, 8)}
          </div>
        ))}
      </div>
    </div>
  );
};

const style = document.createElement('style');
style.textContent = `
  @keyframes matrix-rain {
    0% {
      transform: translateY(-100px);
      opacity: 1;
    }
    100% {
      transform: translateY(200px);
      opacity: 0;
    }
  }
  
  .preserve-3d {
    transform-style: preserve-3d;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
`;
document.head.appendChild(style);

export default About;
