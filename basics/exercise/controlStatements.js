let password = "1123445555566";

if (password.length === 8) {
  console.log("✅ Welcome");
} else if (password.length > 8) {
  console.log("❌ Too Long Password – Should be 8 characters");
} else if (password.length < 8) {
  console.log("❌ Too Short Password – Should be 8 characters");
} else {
  console.log("⚠️ Please Provide the password");
}




