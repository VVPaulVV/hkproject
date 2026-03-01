import { Outlet } from 'react-router-dom';
import Navigation from './Navigation';
import Footer from './Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

const Layout = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.01
    });

    return (
        <div className="min-h-screen flex flex-col marble-texture relative overflow-x-hidden">
            <motion.div className="progress-bar" style={{ scaleX }} />
            <Navigation />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
