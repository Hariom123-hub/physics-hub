import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Menu, 
  X, 
  ChevronRight, 
  BookOpen, 
  Target, 
  Users, 
  Trophy, 
  CheckCircle2,
  GraduationCap,
  Clock,
  ExternalLink
} from 'lucide-react';

// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInLeft = {
  initial: { opacity: 0, x: -30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
  initial: { opacity: 0, x: 30 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const hoverScale = {
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 }
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const courses = [
    {
      title: "CLASS 11 PHYSICS",
      description: "Strong foundation for higher studies",
      icon: <BookOpen className="w-8 h-8 text-golden" />
    },
    {
      title: "CLASS 12 PHYSICS",
      description: "Board + Entrance preparation",
      icon: <CheckCircle2 className="w-8 h-8 text-golden" />
    },
    {
      title: "JEE PHYSICS",
      description: "Concept clarity + problem solving",
      icon: <Target className="w-8 h-8 text-golden" />
    },
    {
      title: "NEET PHYSICS",
      description: "Important concepts + PYQ practice",
      icon: <Users className="w-8 h-8 text-golden" />
    },
    {
      title: "CEE PHYSICS",
      description: "Complete guidance for Assam CEE",
      icon: <Trophy className="w-8 h-8 text-golden" />
    }
  ];

  const whyChooseUs = [
    { title: "Experienced Faculty", icon: <Users /> },
    { title: "Concept Clarity", icon: <Target /> },
    { title: "Regular Tests & Doubt Solving", icon: <BookOpen /> },
    { title: "Small Batch Size", icon: <Clock /> },
    { title: "Proven Results", icon: <Trophy /> }
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-navy selection:bg-golden selection:text-navy">
      {/* Header - Fixed and Consistent */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* Main Nav */}
        <nav className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-golden shadow-lg bg-white shrink-0">
              <img 
                src="/src/assets/images/physics_hub_logo_1784779764563.jpg" 
                alt="Physics Hub Logo" 
                className="w-full h-full object-cover scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-navy leading-none">
                PHYSICS <span className="text-golden">HUB</span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-navy/60 mt-1">
                A Tutorial Home of Physics
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.a 
              href="tel:09706426223" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-navy text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-navy/20 transition-all"
            >
              <Phone size={18} />
              CALL NOW
            </motion.a>
            <motion.a 
              href="https://wa.me/09706426223" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-2.5 rounded-full font-bold shadow-lg hover:shadow-green-500/20 transition-all"
            >
              <MessageCircle size={18} />
              WHATSAPP
            </motion.a>
            <button 
              onClick={() => setIsMenuOpen(true)}
              className="p-2 rounded-lg transition-colors bg-navy/5 text-navy hover:bg-navy/10"
            >
              <Menu size={24} />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="lg:hidden p-2 rounded-lg transition-colors bg-navy/5 text-navy"
          >
            <Menu size={24} />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-navy/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              className="fixed top-0 right-0 h-full w-full max-w-sm bg-white z-[70] shadow-2xl p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="flex items-center gap-3">
                  <img 
                    src="/src/assets/images/physics_hub_logo_1784779764563.jpg" 
                    alt="Physics Hub Logo" 
                    className="w-24 h-24 object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="flex flex-col">
                    <span className="text-2xl font-black tracking-tighter text-navy">
                      PHYSICS <span className="text-golden">HUB</span>
                    </span>
                    <span className="text-[10px] font-bold text-navy/40 uppercase tracking-widest">
                      A Tutorial Home of Physics
                    </span>
                  </div>
                </div>
                <button onClick={() => setIsMenuOpen(false)} className="p-2 bg-navy/5 text-navy rounded-full hover:bg-navy/10">
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col gap-6 text-xl font-bold">
                <a href="#hero" onClick={() => setIsMenuOpen(false)} className="hover:text-golden transition-colors">Home</a>
                <a href="#courses" onClick={() => setIsMenuOpen(false)} className="hover:text-golden transition-colors">Courses</a>
                <a href="#why-us" onClick={() => setIsMenuOpen(false)} className="hover:text-golden transition-colors">Why Choose Us</a>
                <a href="#contact" onClick={() => setIsMenuOpen(false)} className="hover:text-golden transition-colors">Contact</a>
              </div>

              <div className="mt-auto flex flex-col gap-4">
                <a href="tel:09706426223" className="w-full flex items-center justify-center gap-3 bg-navy text-white py-4 rounded-2xl font-black">
                  <Phone size={20} /> CALL NOW
                </a>
                <a href="https://wa.me/09706426223" className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white py-4 rounded-2xl font-black">
                  <MessageCircle size={20} /> WHATSAPP
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <section 
        id="hero" 
        className="relative bg-navy overflow-hidden mt-[88px] md:mt-[104px]"
      >
        <div className="w-full aspect-video relative flex items-center">
          {/* Background Layer */}
          <div className="absolute inset-0 z-0">
            <img 
              src="/src/assets/images/physics_bg_1784778152823.jpg" 
              alt="Physics Background" 
              className="w-full h-full object-cover opacity-20"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/40"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full h-full relative z-10 grid grid-cols-2 gap-4 md:gap-12 items-center">
            {/* Hero Content - Adjusted for density in 16:9 frame */}
            <motion.div 
              {...slideInLeft}
              className="text-white space-y-2 md:space-y-6"
            >
              <div className="inline-flex items-center gap-1.5 md:gap-2 bg-golden/10 border border-golden/20 px-2 md:px-4 py-1 md:py-2 rounded-full">
                <span className="w-1.5 h-1.5 md:w-2 md:h-2 bg-golden rounded-full animate-pulse"></span>
                <span className="text-golden text-[8px] md:text-sm font-black uppercase tracking-wider">Physics Coaching</span>
              </div>
              
              <div className="space-y-0.5 md:space-y-2">
                <h1 className="text-xl sm:text-3xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
                  STRONG CONCEPTS.<br />
                  <span className="text-golden">BRIGHT FUTURES.</span>
                </h1>
                <p className="text-[10px] sm:text-sm md:text-2xl text-white/70 font-medium italic">
                  Board, JEE, CEE & NEET
                </p>
              </div>

              <div className="hidden sm:flex flex-wrap gap-2 md:gap-4">
                {["Class 11", "Class 12"].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-1 md:gap-2 bg-white/5 border border-white/10 px-2 md:px-4 py-1 md:py-2 rounded-lg backdrop-blur-md">
                    <CheckCircle2 size={12} className="text-golden md:w-[18px] md:h-[18px]" />
                    <span className="font-bold text-[10px] md:text-base">{item}</span>
                  </div>
                ))}
              </div>

              <motion.button 
                {...hoverScale}
                className="bg-golden text-navy px-4 md:px-10 py-2 md:py-5 rounded-full text-[10px] md:text-xl font-black shadow-lg md:shadow-2xl shadow-golden/20 flex items-center gap-1 md:gap-3 w-fit"
              >
                ENQUIRE NOW <ChevronRight className="w-3 h-3 md:w-6 md:h-6" />
              </motion.button>
            </motion.div>

            {/* Hero Image - touching right edge on mobile */}
            <motion.div 
              {...slideInRight}
              className="relative h-full flex justify-center md:justify-end items-center md:items-end mt-8 md:mt-0"
            >
              {/* Abstract Circle behind student */}
              <div className="absolute bottom-0 right-0 w-[120%] md:w-[80%] aspect-square bg-golden rounded-full opacity-10 blur-[40px] md:blur-[100px] pointer-events-none"></div>
              
              <div className="relative z-10 w-full flex items-center justify-center md:justify-end">
                <img 
                  src="/src/assets/images/IMG_20260723_094219.jpg" 
                  alt="Physics Hub Classroom" 
                  className="w-[95%] md:w-full max-h-[300px] md:max-h-none aspect-video md:aspect-[4/3] object-cover rounded-[2rem] border-4 border-white/10 shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Section - Compact 2-Column Layout */}
      <section id="courses" className="py-16 md:py-20 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 space-y-3">
            <span className="text-golden font-black tracking-widest uppercase text-xs">Our Expertise</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy">OUR COURSES</h2>
            <div className="w-16 h-1 bg-golden mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {courses.map((course, idx) => (
              <motion.div 
                key={idx}
                {...fadeUp}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -5, shadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
                className="bg-white p-6 md:p-8 rounded-[2rem] shadow-md shadow-navy/5 border border-navy/5 flex items-center gap-6 group hover:border-golden/30 transition-all"
              >
                <div className="shrink-0 p-4 bg-navy/5 rounded-2xl group-hover:bg-golden group-hover:text-navy transition-colors duration-500">
                  {course.icon}
                </div>
                <div className="space-y-1 flex-grow">
                  <h3 className="text-lg md:text-xl font-black tracking-tight">{course.title}</h3>
                  <p className="text-navy/60 text-sm font-medium leading-relaxed line-clamp-1">{course.description}</p>
                  <button className="flex items-center gap-1.5 font-bold text-xs text-navy group-hover:text-golden transition-colors pt-2">
                    ENROLL NOW <ChevronRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div {...slideInLeft} className="space-y-8">
              <div className="space-y-4">
                <span className="text-golden font-black tracking-widest uppercase text-sm">Excellence in Education</span>
                <h2 className="text-4xl md:text-5xl font-black text-navy leading-tight">WHY CHOOSE<br />PHYSICS HUB?</h2>
                <div className="w-20 h-1.5 bg-golden rounded-full"></div>
              </div>
              <p className="text-lg text-navy/70 leading-relaxed font-medium">
                We believe in building a solid foundation of concepts that empowers students to excel in both academic boards and highly competitive entrance examinations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {whyChooseUs.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-navy/5 rounded-2xl border border-navy/5">
                    <div className="w-12 h-12 shrink-0 bg-white shadow-sm rounded-xl flex items-center justify-center text-golden">
                      {feature.icon}
                    </div>
                    <span className="font-black text-sm uppercase leading-tight">{feature.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...slideInRight} className="relative">
              <div className="absolute -inset-4 bg-golden/20 rounded-[3rem] -rotate-3 scale-105"></div>
              <div className="relative aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
                <img 
                  src="/src/assets/images/IMG_20260723_094200.jpg" 
                  alt="Physics Class" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 text-white">
                  <div className="text-5xl font-black">100%</div>
                  <div className="text-sm font-bold uppercase tracking-widest text-golden">Student Satisfaction</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="text-center mb-12 space-y-3">
            <span className="text-golden font-black tracking-widest uppercase text-xs">Institute Glimpse</span>
            <h2 className="text-3xl md:text-4xl font-black text-navy">CLASSROOM & CAMPUS</h2>
            <div className="w-16 h-1 bg-golden mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              {...fadeUp}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50"
            >
              <img 
                src="/src/assets/images/IMG_20260723_094234.jpg" 
                alt="Classroom" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              {...fadeUp}
              transition={{ delay: 0.2 }}
              className="relative aspect-video rounded-3xl overflow-hidden shadow-xl border-4 border-slate-50"
            >
              <img 
                src="/src/assets/images/IMG_20260723_094105.jpg" 
                alt="Institute" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Admission Section - Cinematic 16:9 Layout */}
      <section className="bg-navy relative overflow-hidden">
        <div className="w-full aspect-video relative flex items-center overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-golden/5 -skew-x-12 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-golden rounded-full blur-[100px] opacity-10"></div>

          <div className="max-w-7xl mx-auto px-4 md:px-8 w-full h-full relative z-10 flex items-center justify-center py-4 md:py-12">
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[1.5rem] md:rounded-[3rem] p-4 md:p-12 flex flex-row items-center gap-4 md:gap-12 w-full h-[85%] md:h-[80%] max-h-[600px]">
              <div className="flex-grow space-y-2 md:space-y-8 text-left">
                <motion.div {...fadeUp}>
                  <h2 className="text-xl sm:text-4xl md:text-7xl font-black text-white leading-tight">
                    ADMISSION <span className="text-golden">OPEN</span>
                  </h2>
                  <p className="hidden sm:block text-[10px] md:text-xl text-white/60 font-bold uppercase tracking-widest mt-1 md:mt-4">
                    Enroll Now for a Better Tomorrow
                  </p>
                </motion.div>

                <div className="flex flex-wrap gap-1.5 md:gap-4">
                  {["Class 11", "Class 12", "JEE", "NEET"].map((item, idx) => (
                    <span key={idx} className="bg-golden/20 text-golden border border-golden/30 px-2 md:px-6 py-1 md:py-2 rounded-full font-black text-[8px] md:text-sm uppercase">
                      {item}
                    </span>
                  ))}
                </div>

                <motion.button 
                  {...hoverScale}
                  className="bg-golden text-navy px-4 md:px-12 py-2 md:py-5 rounded-full text-[10px] md:text-xl font-black shadow-lg md:shadow-2xl shadow-golden/20 inline-flex items-center gap-1 md:gap-3"
                >
                  CONTACT US <Phone className="w-3 h-3 md:w-6 md:h-6" />
                </motion.button>
              </div>

              <motion.div 
                {...fadeUp}
                className="w-1/3 md:w-1/2 h-full relative flex items-center"
              >
                <div className="absolute inset-0 bg-golden blur-[40px] md:blur-[100px] opacity-20"></div>
                <img 
                  src="/src/assets/images/admission_assets_1784778141021.jpg" 
                  alt="Academic Assets" 
                  className="relative z-10 w-full h-full object-cover rounded-xl md:rounded-3xl shadow-2xl"
                  referrerPolicy="no-referrer"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-4">
            <span className="text-golden font-black tracking-widest uppercase text-sm">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black text-navy">CONTACT US</h2>
            <div className="w-20 h-1.5 bg-golden mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info Cards */}
            <div className="space-y-6">
              <motion.div {...slideInLeft} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-start gap-6">
                <div className="p-4 bg-navy text-golden rounded-2xl">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">Our Location</h4>
                  <p className="text-navy/60 font-medium">Opposite Bharat Petrol Pump, Chowkbazar, Nalbari, Joy Mangla, Assam 781334</p>
                </div>
              </motion.div>

              <motion.div {...slideInLeft} transition={{ delay: 0.1 }} className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 flex items-start gap-6">
                <div className="p-4 bg-navy text-golden rounded-2xl">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-black mb-2">Phone & WhatsApp</h4>
                  <p className="text-navy/60 font-medium">09706426223</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                <motion.a 
                  href="tel:09706426223"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 p-6 bg-navy text-white rounded-3xl font-bold shadow-lg"
                >
                  <Phone size={24} />
                  <span>Call Now</span>
                </motion.a>
                <motion.a 
                  href="https://wa.me/09706426223"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 p-6 bg-[#25D366] text-white rounded-3xl font-bold shadow-lg"
                >
                  <MessageCircle size={24} />
                  <span>WhatsApp</span>
                </motion.a>
                <motion.a 
                  href="https://maps.app.goo.gl/YourMapLink"
                  target="_blank"
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 p-6 bg-white border border-slate-200 text-navy rounded-3xl font-bold shadow-sm"
                >
                  <MapPin size={24} className="text-golden" />
                  <span>Maps</span>
                </motion.a>
              </div>
            </div>

            {/* Map Embed or Contact Form */}
            <motion.div 
              {...slideInRight}
              className="h-full min-h-[400px] bg-slate-100 rounded-[2.5rem] overflow-hidden shadow-inner border-4 border-white"
            >
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3572.846522304856!2d91.4393963753641!3d26.428456876939913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37593f65b4c4897f%3A0x7d28c31e67e3a6c!2sNalbari%2C%20Assam!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Physics Hub Location"
              ></iframe>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy pt-20 pb-10 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-golden/50 bg-white shadow-xl shrink-0">
                  <img 
                    src="/src/assets/images/physics_hub_logo_1784779764563.jpg" 
                    alt="Physics Hub Logo" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black tracking-tighter leading-none">
                    PHYSICS <span className="text-golden">HUB</span>
                  </span>
                  <span className="text-[10px] font-bold text-white/40 uppercase tracking-widest mt-1">
                    A Tutorial Home of Physics
                  </span>
                </div>
              </div>
              <p className="text-white/50 leading-relaxed">
                Dedicated to providing the best physics education for board and competitive exams in Nalbari, Assam.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-white/5 hover:bg-golden hover:text-navy transition-all flex items-center justify-center rounded-xl">
                    <ExternalLink size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-6 h-1 bg-golden rounded-full"></span>
                Quick Links
              </h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li><a href="#hero" className="hover:text-golden transition-colors">Home</a></li>
                <li><a href="#courses" className="hover:text-golden transition-colors">Our Courses</a></li>
                <li><a href="#why-us" className="hover:text-golden transition-colors">Why Choose Us</a></li>
                <li><a href="#contact" className="hover:text-golden transition-colors">Contact Us</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-6 h-1 bg-golden rounded-full"></span>
                Our Courses
              </h4>
              <ul className="space-y-4 text-white/60 font-medium">
                <li>Class 11 Physics</li>
                <li>Class 12 Physics</li>
                <li>JEE Entrance</li>
                <li>NEET Entrance</li>
                <li>Assam CEE</li>
              </ul>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-8 flex items-center gap-2">
                <span className="w-6 h-1 bg-golden rounded-full"></span>
                Get In Touch
              </h4>
              <div className="space-y-4 text-white/60">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-golden shrink-0" />
                  <span>Opposite Bharat Petrol Pump, Chowkbazar, Nalbari, Assam 781334</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={20} className="text-golden shrink-0" />
                  <span>09706426223</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-golden shrink-0" />
                  <span>09706426223</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/10 text-center text-white/30 text-sm font-medium">
            <p>© {new Date().getFullYear()} PHYSICS HUB. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
