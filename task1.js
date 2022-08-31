const arguments = process.argv.slice(2);

function calculateAreaOfCircle (radius) {
   const area =  3.14 * (radius * radius);
   console.log(area);
   return area;
}

calculateAreaOfCircle(arguments[0]* 1);
