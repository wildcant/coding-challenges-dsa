fn fizz_buzz(n: i32) -> Vec<String> {
    (1..n + 1)
        .map(|i| match i {
            n if n % 3 == 0 && n % 5 == 0 => String::from("FizzBuzz"),
            n if n % 3 == 0 => String::from("Fizz"),
            n if n % 5 == 0 => String::from("Buzz"),
            _ => i.to_string(),
        })
        .collect()
}

fn fizz_buzz_with_hash_map(n: i32) -> Vec<String> {
    let mut ans: Vec<String> = vec![];
    let mut fizz_buzz_dict: HashMap<i32, &str> = HashMap::new();
    fizz_buzz_dict.insert(3, "Fizz");
    fizz_buzz_dict.insert(5, "Buzz");

    let divisors = [3, 5];

    for num in 1..n + 1 {
        let mut num_ans_str = String::new();
        for key in divisors {
            if num % key == 0 {
                num_ans_str.push_str(fizz_buzz_dict.get(&key).unwrap());
            }
        }
        if num_ans_str.eq("") {
            num_ans_str.push_str(&num.to_string());
        }
        ans.push(num_ans_str);
    }
    ans
}

fn main() {
    println!("{:?}", fizz_buzz(100));
    println!("{:?}", fizz_buzz_with_hash_map(100));
}
