import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Column 1: About Our Company */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Our Company</h2>
          <p className="text-gray-400 text-sm">
            Meal Hub is dedicated to providing fresh, healthy, and delicious meals for our customers. Our goal is to make every meal an experience to remember.
          </p>
        </div>

        {/* Column 2: About Our Food */}
        <div>
          <h2 className="text-lg font-bold mb-3">About Our Food</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li>Fresh Ingredients</li>
            <li>Healthy & Nutritious</li>
            <li>Chef-Crafted Dishes</li>
            <li>100% Organic Options</li>
          </ul>
        </div>

        {/* Column 3: Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Quick Links</h2>
          <ul className="text-gray-400 text-sm space-y-2">
            <li><Link href="/" className="hover:text-blue-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
            <li><Link href="/menu" className="hover:text-blue-400">Our Menu</Link></li>
            <li><Link href="/contact" className="hover:text-blue-400">Contact Us</Link></li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div>
          <h2 className="text-lg font-bold mb-3">Follow Us</h2>
          <div className="flex space-x-4">
            <a href="https://facebook.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook"></i> Facebook</a>
            <a href="https://twitter.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i> Twitter</a>
            <a href="https://instagram.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i> Instagram</a>
            <a href="https://youtube.com" className="hover:text-blue-400" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i> YouTube</a>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Meal Hub. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
