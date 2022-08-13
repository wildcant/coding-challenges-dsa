use std::vec;

fn running_sum(numbers: Vec<i32>) -> Vec<i32> {
    let mut pre_sum = 0;
    numbers
        .into_iter()
        .map(|num| {
            pre_sum += num;
            pre_sum
        })
        .collect()
}

fn main() {
    println!("{:?}", running_sum(vec![1, 2, 3]))
}
