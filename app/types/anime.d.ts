declare module "animejs" {
  namespace anime {
    // Add anime.js type definitions here
    function stagger(value: number, options?: object): any
    function setDashoffset(el: any): number
    // Add other anime.js methods as needed
  }

  const anime: any
  export default anime
}
