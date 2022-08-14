pub fn find_max_consecutive_ones(numbers: Vec<i32>) -> i32 {
    let mut max = 0;
    let mut count = 0;
    numbers.into_iter().for_each(|n| {
        if n == 1 {
            count += 1;
            max = if count > max { count } else { max }
        } else {
            count = 0;
        }
    });
    max
}
