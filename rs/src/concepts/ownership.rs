fn ownership() {
    let s = String::from("works just fine");
    let first = first_word(&s);
    println!("{:?}", &first);
    let my_string = String::from("hello world");
    let word = first_word(&my_string[0..6]);
    println!("{:?}", &word);
}

fn first_word(s: &str) -> &str {
    let bytes = s.as_bytes();
    for (i, &item) in bytes.iter().enumerate() {
        if item == b' ' {
            return &s[..i];
        }
    }
    &s[..]
}
