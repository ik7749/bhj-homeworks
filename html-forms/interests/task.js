const interestCheck = document.querySelectorAll('.interest__check');
const interestsActive = [...document.querySelectorAll('ul.interests.interests_active')]

function btnCheckbox() {
	interestsActive.forEach((childElement) => {
		let parentCheck = childElement.parentElement.querySelector('input')
		if (parentCheck === event.target && parentCheck.checked === true) {
			[...childElement.querySelectorAll('input')].forEach(elem => elem.checked = true)
		} else if (parentCheck === event.target && parentCheck.checked === false) {
			[...childElement.querySelectorAll('input')].forEach(elem => elem.checked = false)
		}
	})
}

interestCheck.forEach(el => addEventListener('change', btnCheckbox))