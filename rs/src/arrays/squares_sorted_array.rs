pub fn sorted_squares(numbers: Vec<i32>) -> Vec<i32> {
    let mut results: Vec<i32> = numbers.into_iter().map(|n| n.pow(2)).collect();
    results.sort();
    results
}
