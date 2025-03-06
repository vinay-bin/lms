import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-gray-800 text-white py-6">
  <div class="container mx-auto px-6 text-center">
    <div class="flex justify-center space-x-6 mb-4">
      <a href="#" class="hover:text-gray-400">Facebook</a>
      <a href="#" class="hover:text-gray-400">Twitter</a>
      <a href="#" class="hover:text-gray-400">Instagram</a>
      <a href="#" class="hover:text-gray-400">LinkedIn</a>
    </div>

    <p class="text-sm">
      &copy; 2025 Your Company. All rights reserved.
    </p>

    <div class="mt-4 text-sm">
      <a href="#" class="hover:text-gray-400">Privacy Policy</a>
      <span class="mx-2">|</span>
      <a href="#" class="hover:text-gray-400">Terms & Conditions</a>
    </div>
  </div>
</footer>
  )
}

export default Footer