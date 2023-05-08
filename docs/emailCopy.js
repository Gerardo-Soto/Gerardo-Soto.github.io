//
const email = 'gerardo.8.soto@gmail.com';
const emailCopy = document.getElementById('emailCopy');

emailCopy.addEventListener('click', () => {
    navigator.clipboard.writeText(email)
		.then(() => {
			//console.log(`email copied to clipboard!`);
            alert('<gerardo.8.soto@gmail.com> email copied.');
		})
		.catch((error) => {
			console.error(`Could not copy email to clipboard:${email} `);
		});
});