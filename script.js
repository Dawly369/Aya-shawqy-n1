// Counter functionality
const counter = document.getElementById('counter');
const tasbeehBtn = document.getElementById('tasbeeh');
const tahmeedBtn = document.getElementById('tahmeed');
const takbeerBtn = document.getElementById('takbeer');
const tahlilBtn = document.getElementById('tahlil');
const istighfarBtn = document.getElementById('istighfar');
const hawqalaBtn = document.getElementById('hawqala');
const prayersContainer = document.getElementById('prayers-container');

// Individual counters
const counters = {
    tasbeeh: { element: document.getElementById('tasbeeh-counter'), count: 0 },
    tahmeed: { element: document.getElementById('tahmeed-counter'), count: 0 },
    takbeer: { element: document.getElementById('takbeer-counter'), count: 0 },
    tahlil: { element: document.getElementById('tahlil-counter'), count: 0 },
    istighfar: { element: document.getElementById('istighfar-counter'), count: 0 },
    hawqala: { element: document.getElementById('hawqala-counter'), count: 0 }
};

// List of prayers/duas to display
const prayers = [
    'اللهمّ أبدلها دارًا خيرًا من دارها، وأهلًا خيرًا من أهلها، وأدخِلها الجنّة، وأعِذْها من عذاب القبر ومن عذاب النار.',
    'اللهمّ عامِلْها بما أنتَ أهلُه، ولا تعاملْها بما هي أهلُه.',
    'اللهمّ اجزِها عن الإحسان إحسانًا، وعن الإساءة عفوًا وغفرانًا.',
    'اللهمّ إن كانت محسنةً فزدْ في حسناتها، وإن كانت مسيئةً فتجاوز عن سيّئاتها.',
    'اللهمّ أدخِلها الجنةَ من غير مناقشةِ حسابٍ، ولا سابقةِ عذابٍ.',
    'اللهمّ آنِسها في وحدتها، وفي وحشتها، وفي غربتها.',
    'اللهمّ أنزِلها منزلًا مباركًا، وأنتَ خير المنزلين.',
    'اللهمّ أنزِلها منازل الصدّيقين، والشهداء، والصالحين، وحَسُنَ أولئك رفيقًا.',
    'اللهمّ اجعل قبرَها روضةً من رياضِ الجنة، ولا تجعلْه حفرةً من حفرِ النار.',
    'اللهمّ افسَحْ لها في قبرِها مدَّ بصرِها، وافرِشْ قبرَها من فراشِ الجنة.',
    'اللهمّ أعِذْها من عذابِ القبر، وجفافِ الأرضِ عن جنبيها.',
    'اللهمّ املأ قبرَها بالرضا والنور والفسحة والسرور.',
    'اللهمّ إنّها في ذمّتِك وحبلِ جوارك، فقِها فتنةَ القبر، وعذابَ النار، وأنتَ أهل الوفاءِ والحقّ، فاغفر لها وارحمها إنّك أنتَ الغفورُ الرحيم.',
    'اللهمّ إنّها عبدتُك، وابنةُ عبدِك، خرجتْ من الدّنيا وسَعَتْها ومحبوبِها وأحبّائها فيها إلى ظلمةِ القبرِ وما هو لاقيها.',
    'اللهمّ إنّها كانت تشهد أنّك لا إلهَ إلا أنت، وأنّ محمدًا عبدُك ورسولُك، وأنتَ أعلمُ بها.',
    'اللهمّ إنّا نتوسّل بك إليك، ونقسم بك عليك، أن ترحمها ولا تعذّبها، وأن تثبّتها عند السؤال.',
    'اللهمّ إنّها نَزَلتْ بك، وأنتَ خيرُ منزولٍ به، وأصبحتْ فقيرةً إلى رحمتك، وأنت غنيٌّ عن عذابها.',
    'اللهمّ آتها برحمتك ورضاك، وقِها فتنةَ القبر وعذابَه، وآتها برحمتك الأمنَ من عذابك، حتى تبعثَها إلى جنّتك يا أرحم الراحمين.',
    'اللهمّ انقلها من مواطنِ الدود، وضيقِ اللحود، إلى جنّاتِ الخلود.',
    'اللهمّ احمِها تحت الأرض، واستُرْها يوم العرض، ولا تُخزِها يومَ يُبعثون "يومَ لا ينفع مالٌ ولا بنون إلّا من أتى اللهَ بقلبٍ سليم".',
    'اللهمّ يمّن كتابَها، ويسّر حسابَها، وثقّل بالحسنات ميزانَها، وثبّت على الصراط أقدامَها، وأسكنها في أعلى الجنّات، بجوارِ حبيبك ومصطفاك صلى الله عليه وسلم.',
    'اللهمّ أمِّنها من فزع يوم القيامة، ومن هول يوم القيامة، واجعل نفسَها آمنةً مطمئنةً، ولقّنها حجّتَها.',
    'اللهمّ اجعلها في بطن القبر مطمئنّة، وعند قيام الأشهادِ آمنة، وبجودِ رضوانك واثقة، وإلى أعلى درجاتك سابقة.',
    'اللهمّ اجعل عن يمينها نورًا، حتى تبعثَها آمنةً مطمئنةً في نورٍ من نورك.',
    'اللهمّ انظر إليها نظرةَ رضا، فإنّ من تنظُر إليه نظرةَ رضا لا تعذّبه أبدًا.',
    'اللهمّ أسكنها فسيحَ الجنان، واغفر لها يا رحمن، وارحمها يا رحيم، وتجاوز عمّا تعلم يا عليم.',
    'اللهمّ اعفُ عنها، فإنّك القائل "ويعفو عن كثير".',
    'اللهمّ إنّها جاءتْ ببابك، وأناختْ بجنابك، فَجُدْ عليها بعفوك وإكرامك وجودِ إحسانك.',
    'اللهمّ إن رحمتَك وسِعَتْ كلَّ شيء، فارحمْها رحمةً تطمئنُّ بها نفسُها، وتقرُّ بها عينُها.',
    'اللهمّ احشرها مع المتّقين إلى الرحمنِ وفدًا.',
    'اللهم إنها في ذمتك وحبل جوارك، فقها فتنة القبر، وعذاب النار، وأنت أهل الوفاء والحق ,, وصلي الله وسلم على سيدنا ومولانا محمد وعلي آله وصحبه أجمعين ,,'
];

// Initialize all counters to 0
let count = 0;
let tasbeehCount = 0;
let tahmeedCount = 0;
let takbeerCount = 0;
let tahlilCount = 0;
let istighfarCount = 0;
let hawqalaCount = 0;

// Initialize counter displays
document.getElementById('counter').textContent = '0';
document.getElementById('tasbeeh-counter').textContent = '0';
document.getElementById('tahmeed-counter').textContent = '0';
document.getElementById('takbeer-counter').textContent = '0';
document.getElementById('tahlil-counter').textContent = '0';
document.getElementById('istighfar-counter').textContent = '0';
document.getElementById('hawqala-counter').textContent = '0';

// Function to update counter display
function updateCounter(type = '') {
    if (type) {
        // Ensure the count is a number and update display
        const countValue = Number(window[`${type}Count`]) || 0;
        document.getElementById(`${type}-counter`).textContent = countValue;
    } else {
        // Update main counter display
        counter.textContent = count || 0;
    }
    
    // Add visual feedback
    counter.style.transform = 'scale(1.1)';
    setTimeout(() => {
        counter.style.transform = 'scale(1)';
    }, 200);
}

// Function to handle counter increment
function incrementCounter(type) {
    // Ensure we're working with numbers
    count = (parseInt(count) || 0) + 1;
    window[`${type}Count`] = (parseInt(window[`${type}Count`]) || 0) + 1;
    
    // Update displays
    updateCounter();
    updateCounter(type);
    showFeedback('+1');
}

// Event listeners for buttons
tasbeehBtn.addEventListener('click', () => incrementCounter('tasbeeh'));
tahmeedBtn.addEventListener('click', () => incrementCounter('tahmeed'));
takbeerBtn.addEventListener('click', () => incrementCounter('takbeer'));
tahlilBtn.addEventListener('click', () => incrementCounter('tahlil'));
istighfarBtn.addEventListener('click', () => incrementCounter('istighfar'));
hawqalaBtn.addEventListener('click', () => incrementCounter('hawqala'));

// Function to show visual feedback when a button is clicked
function showFeedback(text) {
    const feedback = document.createElement('div');
    feedback.className = 'feedback';
    feedback.textContent = text;
    feedback.style.position = 'fixed';
    feedback.style.left = Math.random() * 80 + 10 + '%';
    feedback.style.top = Math.random() * 40 + 30 + '%';
    feedback.style.color = '#27ae60';
    feedback.style.fontSize = '1.5rem';
    feedback.style.fontWeight = 'bold';
    feedback.style.pointerEvents = 'none';
    feedback.style.animation = 'floatUp 1.5s forwards';
    feedback.style.zIndex = '1000';
    document.body.appendChild(feedback);
    
    // Remove the feedback element after animation
    setTimeout(() => {
        feedback.remove();
    }, 1500);
}

// Add flip animation for counters
const style = document.createElement('style');
style.textContent = `
    @keyframes flip {
        0% { transform: rotateX(0deg); }
        50% { transform: rotateX(90deg); }
        100% { transform: rotateX(0deg); }
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;
document.head.appendChild(style);


// Function to create prayer elements
function createPrayers() {
    prayers.forEach((prayer, index) => {
        const prayerElement = document.createElement('div');
        prayerElement.className = 'prayer';
        prayerElement.textContent = prayer;
        prayerElement.setAttribute('data-number', index + 1);
        prayersContainer.appendChild(prayerElement);
    });
}

// Create prayers when the page loads
window.addEventListener('load', createPrayers);

// Add touch support for mobile devices
document.addEventListener('touchstart', handleTouchStart, false);        
document.addEventListener('touchmove', handleTouchMove, false);

let xDown = null;                                                        
let yDown = null;

function handleTouchStart(evt) {                                         
    xDown = evt.touches[0].clientX;                                      
    yDown = evt.touches[0].clientY;                                      
};                                                

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;                                    
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
                                        
};
