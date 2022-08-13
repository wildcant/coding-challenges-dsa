fn can_construct(ransom_note: String, mut magazine: String) -> bool {
    for c in ransom_note.chars() {
        if let Some(idx) = magazine.find(c) {
            magazine.remove(idx);
        } else {
            return false;
        }
    }
    true
}

pub fn test() {
    assert!(can_construct(String::from("aa"), String::from("aa")));
    assert!(!can_construct(String::from("a"), String::from("b")));
    assert!(!can_construct(String::from("aaa"), String::from("aab")));
}
