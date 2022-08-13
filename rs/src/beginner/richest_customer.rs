fn maximum_wealth(accounts: Vec<Vec<i32>>) -> i32 {
    accounts.iter().map(|ac| ac.iter().sum()).max().unwrap()
}

fn main() {
    println!("{:?}", maximum_wealth(vec![vec![1, 2, 3], vec![3, 2, 1]]))
}
