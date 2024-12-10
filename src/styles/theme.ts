export const theme = {
  colors: {
    primary: {
      gradient: 'bg-gradient-to-b from-white via-primary-200 to-primary-500',
      text: {
        base: 'text-dark-50',
        gradient: 'bg-gradient-to-b from-white via-primary-200 to-primary-500 bg-clip-text text-transparent'
      }
    }
  },
  animations: {
    gradient: 'animate-gradient bg-[length:200%_auto]',
    hover: 'transition-all duration-500 ease-out hover:scale-105'
  }
};