// Theme system test utility
export const testThemeSystem = () => {
  console.log('🧪 Testing Theme System...');
  
  // Test 1: Check if theme context is available
  const themeContext = document.querySelector('[data-theme]');
  if (themeContext) {
    console.log('✅ Theme context found:', themeContext.getAttribute('data-theme'));
  } else {
    console.log('❌ Theme context not found');
  }
  
  // Test 2: Check if CSS variables are defined
  const root = document.documentElement;
  const computedStyle = getComputedStyle(root);
  const backgroundColor = computedStyle.getPropertyValue('--background-color');
  const textColor = computedStyle.getPropertyValue('--text-color');
  
  console.log('✅ CSS Variables:', {
    backgroundColor: backgroundColor.trim(),
    textColor: textColor.trim()
  });
  
  // Test 3: Check localStorage
  const savedTheme = localStorage.getItem('theme');
  console.log('✅ Saved theme:', savedTheme || 'none (will use system preference)');
  
  // Test 4: Check system preference
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  console.log('✅ System preference:', prefersDark ? 'dark' : 'light');
  
  console.log('🎉 Theme system test completed!');
};

// Auto-run test when imported
if (typeof window !== 'undefined') {
  setTimeout(testThemeSystem, 1000);
}
