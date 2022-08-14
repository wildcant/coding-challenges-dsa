pub fn find_numbers(numbers: Vec<i32>) -> i32 {
    let mut count = 0;
    numbers.into_iter().for_each(|n| {
        if n.to_string().len() % 2 == 0 {
            count += 1;
        }
    });
    count
}
