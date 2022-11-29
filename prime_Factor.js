// A prime factor is a number that is prime and divides another without a remainder.

function print_prime_factors(number){
  factor =2
  while(factor <= number){
    if(number % factor ==0){
        console.log(factor)
      number = number / factor
    }
    else{
        factor++
    }
  }
  return "Done"
}
print_prime_factors(100)