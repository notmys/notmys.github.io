const encoded = "cHJpbnQoIkhpZGRlbiBzY3JpcHQgcmFuISIp";
if (navigator.userAgent.includes('Roblox')) {
  atob(encoded);
} else {
  console.log('Unauthorized access. Use in Roblox executor.');
}
