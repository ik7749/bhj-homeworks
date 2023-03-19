const arrTabs = Array.from(document.querySelectorAll('.tab'));
const arrTabContents = Array.from(document.querySelectorAll('.tab__content'));

function showTab(event) {
	let i = arrTabs.findIndex((tab) => tab.classList.contains('tab_active'));
	arrTabs[i].classList.remove('tab_active');
	arrTabContents[i].classList.remove('tab__content_active');
	event.currentTarget.classList.add('tab_active');
	i = arrTabs.findIndex((item) => item.classList.contains('tab_active'));
	arrTabContents[i].classList.add('tab__content_active');
};

arrTabs.forEach((item) => item.addEventListener('click', showTab));
