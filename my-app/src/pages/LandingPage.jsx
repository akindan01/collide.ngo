import React, { useState } from 'react';
import { FaSearch, FaUser, FaFlag, FaEye, FaHandsHelping } from 'react-icons/fa'; 
import { Menu, X, Phone, Search, Tag, User, ArrowRight, Mail, MapPin, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const fadeInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};


const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, 
    },
  },
};

const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

const fadeInAnimation = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
};

function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const [newsletterEmail, setNewsletterEmail] = useState('');

  const handleNewsletter = (e) => {
  e.preventDefault();

  if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert(`Thank you for subscribing with ${newsletterEmail}!`);
  setNewsletterEmail(''); 
};

  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSuccess("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
    setErrors({});
  };


  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const blogPosts = [
    {
      id: 1,
      title: 'Building Schools in Rural Communities: A Journey of Hope',
      excerpt: 'Discover how our education initiative is transforming lives by providing access to quality education in remote villages across Africa.',
      author: 'Sarah Johnson',
      date: 'October 25, 2025',
      category: 'Education',
      image: 'https://i.pinimg.com/736x/11/6a/02/116a0252cb802e5b0e818d341246eb9c.jpg',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Clean Water Changes Everything: Stories from the Field',
      excerpt: 'Meet the families whose lives have been transformed by access to clean drinking water and learn about the impact of our water projects.',
      author: 'Michael Chen',
      date: 'October 22, 2025',
      category: 'Water & Sanitation',
      image: "https://i.pinimg.com/736x/3d/1b/a4/3d1ba46ba08c635e51131ff486d2b714.jpg",
      readTime: '4 min read'
    },
    {
      id: 3,
      title: 'Healthcare Heroes: Mobile Clinics Reaching Remote Areas',
      excerpt: 'Our mobile health units are bringing essential medical services to communities that have never had access to healthcare before.',
      author: 'Dr. Amina Okafor',
      date: 'October 20, 2025',
      category: 'Healthcare',
      image: 'https://i.pinimg.com/736x/51/5b/70/515b70475dad698b2f82ef15d88a5377.jpg',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Empowering Women Through Skills Training Programs',
      excerpt: 'How vocational training is creating economic independence and transforming entire communities through women empowerment.',
      author: 'Lisa Anderson',
      date: 'October 18, 2025',
      category: 'Community Development',
      image: 'https://i.pinimg.com/736x/c9/11/ed/c911ed9446664b01233905f5ce4fe86b.jpg',
      readTime: '5 min read'
    },
    {
      id: 5,
      title: 'From Hunger to Hope: Our Food Security Initiative',
      excerpt: 'Learn about our innovative approach to combating food insecurity and building sustainable agriculture in vulnerable communities.',
      author: 'James Williams',
      date: 'October 15, 2025',
      category: 'Food Security',
      image: 'https://i.pinimg.com/736x/30/05/1c/30051c40b262300ad93ab6d9110c8a0d.jpg',
      readTime: '7 min read'
    },
    {
      id: 6,
      title: 'Children\'s Voices: Stories of Resilience and Dreams',
      excerpt: 'Hear directly from the children whose lives have been touched by our programs and their inspiring dreams for the future.',
      author: 'Emily Martinez',
      date: 'October 12, 2025',
      category: 'Stories',
      image: 'https://i.pinimg.com/736x/90/52/d4/9052d42571449bbbedaed8f1c7131004.jpg',
      readTime: '4 min read'
    }
  ];

  const categories = ['All', 'Education', 'Healthcare', 'Water & Sanitation', 'Community Development', 'Food Security', 'Stories'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="bg-teal-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span>+234 (0)81 1234 567</span>
          </div>
          <div className="flex items-center space-x-3">
            <a href="" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a href="" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="" className="hover:text-yellow-400" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      </div>

      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4"> 
          <div className="flex justify-between items-center py-4">
            

            <div className="flex items-center space-x-2">
              <img src={logo} alt="Collide Logo" className="h-14 w-auto" />
              <span className="text-2xl font-extrabold text-black">COLLIDE</span>
            </div>

    
            <ul className="hidden lg:flex space-x-8 text-gray-700 font-medium">
              {['HOME', 'PAGES', 'DONATION', 'EVENTS', 'BLOG', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-yellow-500 transition-colors duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>


            <div className="hidden lg:flex items-center space-x-4">
              <button className="text-gray-700 hover:text-yellow-500">
                <FaSearch className="w-5 h-5" />
              </button>
              <button className="text-gray-700 hover:text-yellow-500">
                <FaUser className="w-5 h-5" />
              </button>
              <button className="bg-yellow-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-md hover:shadow-lg">
                Donate
              </button>
            </div>

            <button onClick={toggleMenu} className="lg:hidden text-gray-800 p-2 rounded-md hover:bg-gray-100">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden mt-0 pb-4 border-t border-gray-100">
            <ul className="flex flex-col space-y-2 px-4">
              {['HOME', 'PAGES', 'DONATION', 'EVENTS', 'BLOG', 'CONTACT'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-500 hover:text-white rounded transition-colors duration-300" 
                    onClick={toggleMenu} 
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="w-full bg-yellow-500 text-white mt-2 px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300">
                  Donate
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
      
      
      <section id="home" className="relative overflow-hidden min-h-[60vh] sm:min-h-[70vh] md:min-h-[60vh] lg:min-h-screen">
        <div
          className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/34/ef/ca/34efcabb3d220b171f7d92da90abf6cd.jpg')] bg-cover bg-center bg-no-repeat z-0"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />


        <div className="relative z-20 max-w-7xl mx-auto px-4 flex items-center h-full">
          <motion.div 
          className="max-w-2xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p className="text-white text-3sm font-semibold mt-40 pl-2 tracking-wide">Give them a chance.</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 leading-tight text-white">
              Give The Child The Gift Of Education.
            </h1>
            <p className="text-lg md:text-xl mb-6 text-gray-200">
              Every child deserves the chance to learn and grow. Your generosity today can illuminate a lifetime of potential and possibilities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button className="bg-yellow-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Our Team
              </button>
              <motion.div 
              className="flex -space-x-3 mt-2 sm:mt-0"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}>
                <img
                 src="https://images.unsplash.com/photo-1598547461182-45d03f6661e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnZXJpYW4lMjBsb29raW5nJTIwcGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"
                 alt="Profile 1"
                 className="w-12 h-12 rounded-full border-2 border-white object-cover"
               />
                <img
                 src="https://images.unsplash.com/photo-1672675225389-4d7b6f231f5b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5pZ2VyaWFuJTIwZmFjZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=700"
                 alt="Profile 2"
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
                <img
                 src="https://images.unsplash.com/photo-1687786918818-92c0c9057317?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bmlnZXJpYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=700"
                 alt="Profile 3"
                 className="w-12 h-12 rounded-full border-2 border-white object-cover"
                 />
                <div className="w-12 h-12 rounded-full bg-yellow-500 border-2 border-white flex items-center justify-center text-sm text-white font-bold">
                  +6
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    <section id="pages" className="bg-white py-20">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
    

      <motion.div
       className="relative"
       initial="hidden"
       whileInView="visible"
       viewport={{ once: true, amount: 0.3 }}
       variants={{
       hidden: { opacity: 0, scale: 0.9 },
       visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
            }}>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://i.pinimg.com/736x/b9/c5/b1/b9c5b1245fccaddc61f88ee93546f034.jpg"
            alt="Community 1"
            className="rounded-3xl object-cover h-80 w-full shadow-md"
          />
          <img
            src="https://i.pinimg.com/736x/d0/63/0a/d0630a73d08c31d6b89f15f544b8e4f6.jpg"
            alt="Community 2"
            className="rounded-3xl object-cover h-80 w-full mt-12 shadow-md"
          />
        </div>


        <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-white p-6 rounded-2xl shadow-xl max-w-xs">
          <p className="font-bold text-lg mb-1">Be Part Of The Move</p>
          <p className="text-sm opacity-90">Collide needs you!</p>
        </div>
      </motion.div>

      <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariant}>
              <p className="text-yellow-500 font-bold mb-4 tracking-wide">WELCOME TO COLLIDE</p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">You're the Hope of Others.</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Collide is a non-profit organization committed to creating lasting impact in communities through education, empowerment, and collaboration.
Our mission is to connect people, resources, and ideas to transform lives one project at a time.
We work hand-in-hand with individuals and organizations who share our vision of a brighter, more equitable future.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-yellow-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-md">
                  Discover More
                </button>
                <div className="flex items-center space-x-3 text-gray-700">
                  <Phone className="w-5 h-5" />
                  <span className="font-semibold">+234 136-6462</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
    </section>

    <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
            <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            variants={containerVariant}
             className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <motion.div className="text-center" variants={fadeInVariant}>
                    <div className="text-5xl font-bold text-gray-800 mb-2">20</div>
                    <div className="text-gray-600">Total Campaigns</div>
                </motion.div>
                <motion.div className="text-center" variants={fadeInVariant}>
                    <div className="text-5xl font-bold text-gray-800 mb-2">12M</div>
                    <div className="text-gray-600">Raised Funds</div>
                </motion.div>
                <motion.div className="text-center" variants={fadeInVariant}>
                    <div className="text-5xl font-bold text-gray-800 mb-2">50+</div>
                    <div className="text-gray-600">Satisfied Donors</div>
                </motion.div>
                <motion.div className="text-center" variants={fadeInVariant}>
                    <div className="text-5xl font-bold text-gray-800 mb-2">200+</div>
                    <div className="text-gray-600">Happy Kids</div>
                </motion.div>
            </motion.div>
        </div>
    </section>

    <section id="donation" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Find the popular cause</h2>
            </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
  
  <motion.div 
  variants={fadeInVariant}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div
      className="h-64 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/c3/c9/b5/c3c9b5b50106ef58d8bc691c59b80b98.jpg')",
      }}
    ></div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        The Thirsty are Waiting For a Glass of Help.
      </h3>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Raised: $4800</span>
          <span>Goal: $8000</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-yellow-500 h-2 rounded-full"
            style={{ width: "60%" }}
          ></div>
        </div>
      </div>
    </div>
  </motion.div>

  
  <motion.div 
  variants={fadeInVariant}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div
      className="h-64 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/79/de/ae/79deaece88fd86d0e610bcfc359309d7.jpg')",
      }}
    ></div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        Changing lives one meal at a time.
      </h3>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Raised: $3200</span>
          <span>Goal: $6000</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-teal-500 h-2 rounded-full"
            style={{ width: "53%" }}
          ></div>
        </div>
      </div>
    </div>
  </motion.div>

  
  <motion.div 
  variants={fadeInVariant}
  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
    <div
      className="h-64 bg-cover bg-center transform hover:scale-105 transition-transform duration-500"
      style={{
        backgroundImage:
          "url('https://i.pinimg.com/736x/94/b4/2e/94b42ebae881c33e6f7006bed128c7d0.jpg')",
      }}
    ></div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        Let's be one community in this cause.
      </h3>
      <div className="mb-4">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Raised: $5500</span>
          <span>Goal: $9000</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-pink-500 h-2 rounded-full"
            style={{ width: "61%" }}
          ></div>
        </div>
      </div>
    </div>
  </motion.div>
</div>
    </section>

     <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div
        className="h-64 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/4d/e6/4a/4de64abe3a6e21056f146e0d0fac5c70.jpg')" }}
      ></div>

      <div
        className="h-64 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/99/b8/b2/99b8b2eb37fd3329cbdeeff0a6f607c5.jpg')" }}
      ></div>

      <div
        className="h-64 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/ed/ca/50/edca50704010f3c5089f9b46124a1a91.jpg')" }}
      ></div>
      <div
        className="h-64 rounded-2xl bg-cover bg-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/59/29/17/5929177674bdd03b86e12278c6c5e31d.jpg')" }}
      ></div>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4">
        <div className="grid  md:flex md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaFlag className="text-white text-3xl font-extrabold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">Collide exists to bridge social and economic divides by connecting passionate individuals with vital resources, fostering collaborative initiatives that drive innovation and create pathways to equity and lasting empowerment for those in need.</p>
            </div>
            <div className="text-center">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaEye className="text-white text-3xl font-extrabold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">A future where collaboration is the catalyst for global progress, fostering a truly interconnected world where all communities have the resources, knowledge, and shared purpose needed to solve humanity's most complex challenges.</p>
            </div>
            <div className="text-center">
                <div className="bg-yellow-400 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <FaHandsHelping className="text-white text-3xl font-extrabold" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Core Values</h3>
                <p className="text-gray-600 leading-relaxed">We prioritize Collaboration, believing that true change happens when diverse people and resources are brought together. We act with Courage, tackling systemic challenges with integrity and championing innovative, bold solutions. We commit to Equity, ensuring our work removes barriers and provides fair access to opportunity and dignity for every individual.</p>
            </div>
        </div>
    </div>

    <section className="py-20 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      
      
      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShV1vgs5DOdtTcPM0gn_y-rcKKYRtwZy9Mrw&s"
            alt="Akinremi Daniel"
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            <h4 className="font-bold text-gray-800">Akinremi Daniel</h4>
            <p className="text-sm text-gray-600">Supporter</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          With a strong background in community outreach, Akinremi is crucial to
          the success of our environmental programs, providing essential,
          hands-on guidance that translates development goals into tangible local
          impact.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/images/lekann.jpg"
            alt="Adebajo Olamilekan"
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            <h4 className="font-bold text-gray-800">Adebajo Olamilekan</h4>
            <p className="text-sm text-gray-600">Supporter</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          As a passionate advocate for sustainable development and community
          outreach, Olamilekan leverages his expertise to steer our environmental
          initiatives.
        </p>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg">
        <div className="flex items-center space-x-4 mb-6">
          <img
            src="/images/wura.jpg"
            alt="Wuraola Adeleye"
            className="w-16 h-16 rounded-full object-cover border-4 border-white shadow-md"
          />
          <div>
            <h4 className="font-bold text-gray-800">Wuraola Adeleye</h4>
            <p className="text-sm text-gray-600">Supporter</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">
          Driving Collide’s green strategy, Wuraola offers deep expertise in
          sustainable development policy, ensuring all our environmental
          initiatives are both effective and community-centric.
        </p>
      </div>

    </div>
  </div>
</section>

<section id="events" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold mb-4 tracking-wide">FOLLOW NEW EVENTS</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Join Our Upcoming Events</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img src="https://i.pinimg.com/736x/01/78/f6/0178f6c9d90656ec6383537bcfd03e76.jpg"
              alt="Uk"
              className="absolute inset-0"/>
              <div className="absolute top-4 right-4 bg-yellow-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                23<br/>Jan
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg mb-2">Help For Poor People</h3>
                <p className="text-white text-sm">New York, USA</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img src="https://i.pinimg.com/736x/45/80/6c/45806cb71f86d49df3deece920699338.jpg"
              alt="Uk"
              className="absolute inset-0"/>
              <div className="absolute top-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                25<br/>Feb
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg mb-2">Education For Kids</h3>
                <p className="text-white text-sm">Lagos, Nigeria</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img src="https://i.pinimg.com/736x/b0/fe/17/b0fe17d42db3f6d0c4d76f679eb1b4f3.jpg"
              alt="Uk"
              className="absolute inset-0 bg-gradient-to-br from-pink-400 to-red-500"/>
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                28<br/>Jun
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg mb-2">Feed The Hungry</h3>
                <p className="text-white text-sm">Accra, Ghana</p>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-lg h-80">
              <img src="https://i.pinimg.com/736x/cf/5b/01/cf5b018c7c83619d7ba47eda2c4c621e.jpg"
              alt="Uk"
              className="absolute inset-0"/>
              <div className="absolute top-4 right-4 bg-blue-500 text-white px-4 py-2 rounded-full font-bold text-sm">
                30<br/>Nov
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-white font-bold text-lg mb-2">Medical Camp</h3>
                <p className="text-white text-sm">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-yellow-500 font-semibold mb-4 tracking-wide">OUR BLOG</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Latest News & Stories</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read inspiring stories from the field and stay updated with our latest initiatives.
            </p>
          </div>
          
          <div className="mb-12">
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 shadow-md"
                />
                <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-yellow-500 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <motion.div 
                 initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariant}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <motion.article key={post.id} 
              variants={fadeInVariant}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div 
                  className="h-56 bg-cover bg-center" 
                  style={{ backgroundImage: `url('${post.image}')` }}
                    ></div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                      <Tag className="w-3 h-3 mr-1" />
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-yellow-600 transition-colors cursor-pointer line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-2 text-xs text-gray-500">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <button className="flex items-center text-yellow-500 font-semibold hover:text-yellow-600 transition-colors text-sm">
                      Read <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="text-center mt-12">
            <button className="bg-yellow-500 text-white px-10 py-4 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
              View All Articles
            </button>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            variants={fadeInAnimation}
            initial="initial"
            transition={{ duration: 0.5 }}
             className="text-center mb-16"
             >
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions or want to get involved? We'd love to hear from you.
            </p>
          </motion.div>

          <div 
            className="grid md:grid-cols-2 gap-12">
            <motion.div
           variants={fadeInAnimation}
           transition={{ duration: 0.5, delay: 0.2 }} >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Mail className="text-yellow-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600">info@collide.org</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <Phone className="text-yellow-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Phone</h3>
                    <p className="text-gray-600">+234 (0)81 1234 567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-yellow-100 p-3 rounded-full">
                    <MapPin className="text-yellow-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">Address</h3>
                    <p className="text-gray-600">123 Hope Street, Building 4<br />Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="space-y-4">
                <form
          onSubmit={handleSubmit}
          className="p-6 md:p-10 shadow-lg space-y-6"
        >
        
          <div>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>
          {success && (
            <p className="text-green-500 text-sm font-medium">{success}</p>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-yellow-500 text-white font-semibold px-8 py-3 rounded-lg hover:bg-yellow-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </form>
               </div>
            </div>
          </div>
        </div>
      </section>

    
      <motion.footer
        variants={staggerContainer}
        initial="hidden"
         className="bg-gray-900 text-white py-12">
  <div className="max-w-7xl mx-auto px-4">
    <motion.div
     className="grid md:grid-cols-4 gap-8 mb-8"
     variants={staggerContainer}>
      <div>
        <div className="flex items-center space-x-2 mb-4">
          <Heart className="text-yellow-500 w-6 h-6" fill="currentColor" />
          <span className="text-xl font-bold">Collide</span>
        </div>
        <p className="text-gray-400 mb-4">
          Creating positive change in communities worldwide.
        </p>
      </div>
      <motion.div
      variants={fadeInAnimation}
      transition={{ duration: 0.9, delay: 0.5 }}
      >
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#home" className="hover:text-yellow-500 transition-colors">Home</a></li>
          <li><a href="#donation" className="hover:text-yellow-500 transition-colors">Donation</a></li>
          <li><a href="#events" className="hover:text-yellow-500 transition-colors">Events</a></li>
          <li><a href="#contact" className="hover:text-yellow-500 transition-colors">Contact</a></li>
        </ul>
      </motion.div>
      <motion.div
      variants={fadeInAnimation}
      transition={{ duration: 0.9, delay: 0.5 }}>
        <h4 className="font-bold mb-4">Resources</h4>
        <ul className="space-y-2 text-gray-400">
          <li><a href="#" className="hover:text-yellow-500 transition-colors">Annual Reports</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">Volunteer</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">Careers</a></li>
          <li><a href="#" className="hover:text-yellow-500 transition-colors">Privacy Policy</a></li>
        </ul>
      </motion.div>
      <motion.div
      variants={fadeInAnimation}
      >
        <h4 className="font-bold mb-4">Newsletter</h4>
        <p className="text-gray-400 mb-4">Stay updated with our latest news and projects.</p>

        <form onSubmit={handleNewsletter} className="flex">
          <input
            type="email"
            placeholder="Your email"
            value={newsletterEmail}
            onChange={(e) => setNewsletterEmail(e.target.value)}
            className="px-4 py-2 rounded-l-lg bg-gray-800 text-white focus:outline-none flex-1"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 px-4 py-2 rounded-r-lg hover:bg-yellow-600 transition-colors flex items-center justify-center"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </motion.div>
    </motion.div>
    <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
      <p>&copy; 2025 COLLIDE NGO. All rights reserved.</p>
      <p>Developed by Akinremi Daniel.</p>
    </div>
  </div>
</motion.footer>

</section>
    </>
  );
}

export default LandingPage;
