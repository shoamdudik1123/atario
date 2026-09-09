import { images } from './images'
import type { Retreat } from '../types/retreat'
import { isDateInRange } from '../utils/dates'

const locationNote = 'המיקום המדויק יישלח לנרשמים לקראת הריטריט.'

const sharedFaq = {
  experience: {
    question: 'האם צריך ניסיון קודם?',
    answer:
      'לא. אפשר להגיע בלי רקע ביוגה, במדיטציה או בריטריטים. ההנחיה מותאמת גם למי שזו הפעם הראשונה.',
  },
  price: {
    question: 'מה כולל המחיר?',
    answer:
      'המחיר כולל לינה, ארוחות לאורך הריטריט, הנחיה, תרגולים, סדנאות ופעילויות בטבע. ההגעה אל אזור הריטריט היא עצמאית.',
  },
  beginners: {
    question: 'האם הריטריט מתאים למתחילים?',
    answer:
      'כן. הקצב מתון, יש מקום לשאלות, ואין ציפייה להגיע עם תרגול קבוע. גם מי שכבר מתרגל ימצא כאן עומק ושקט.',
  },
  packing: {
    question: 'מה צריך להביא?',
    answer:
      'בגדים נוחים לתנועה, שכבה חמה לערב, נעלי הליכה, בקבוק מים, פנס קטן וציוד אישי. רשימה מלאה נשלחת אחרי אישור ההרשמה.',
  },
  location: {
    question: 'איך מקבלים את המיקום המדויק?',
    answer:
      'לאחר אישור ההצטרפות נשלח מסר עם פרטי הגעה, לוחות זמנים והכנה קצרה. המיקום המדויק נמסר רק לנרשמים.',
  },
  alone: {
    question: 'האם אפשר להגיע לבד?',
    answer:
      'כן. חלק ניכר מהמשתתפים מגיעים לבד. אין צורך להכיר אף אחד מראש, ואין לחץ להיות חברותיים מעבר למה שנוח לכם.',
  },
  cancel: {
    question: 'מה קורה אם צריך לבטל?',
    answer:
      'ביטול עד 21 ימים לפני תחילת הריטריט מזכה בהחזר מלא, בניכוי דמי טיפול. לאחר מכן נבדוק אם ניתן למלא את המקום ונחזור אליכם עם האפשרויות.',
  },
  meals: {
    question: 'האם הארוחות כלולות?',
    answer:
      'כן. כל הארוחות כלולות במחיר: ארוחות בוקר, צהריים וערב, לצד שתייה חמה ופירות לאורך היום. אפשר לציין העדפות תזונה בטופס.',
  },
}

export const retreats: Retreat[] = [
  {
    id: 'reset',
    title: 'TAVA Reset – ריטריט גוף ונפש',
    slug: 'tava-reset',
    shortName: 'TAVA Reset',
    shortDescription:
      'ארבעה ימים בהרי ירושלים לעצירה אמיתית: תנועה עדינה, מדיטציה, שהייה בטבע וזמן פנוי לנשימה.',
    description: [
      'TAVA Reset נועד לימים שבהם השגרה כבר לא משאירה מקום. לא כדי לברוח ממנה, אלא כדי לשים אותה בצד לכמה ימים ולחזור אליה אחרת.',
      'הריטריט מתקיים בהרי ירושלים, במקום שקט ומוקף עצים. הימים בנויים מקצב ברור אך לא צפוף: תרגול בוקר, סדנאות קצרות, הליכות בטבע, ארוחות משותפות ושעות שבהן אין צורך לעשות דבר.',
      'התנועה מותאמת לכל גוף. אין כאן מאמץ להגיע לתוצאה, אלא הזמנה להרגיש שוב את הגוף, את הנשימה ואת מה שקורה מתחת לרעש היומיומי.',
      'אם אתם מחפשים כמה ימים של שקט, בלי הצגה ובלי עומס תוכן — Reset הוא המקום להתחיל.',
    ],
    location: 'הרי ירושלים',
    locationNote,
    facilitator: 'שהם דודיק',
    date: '2026-10-22',
    endDate: '2026-10-25',
    duration: '4 ימים · 3 לילות',
    nights: 3,
    days: 4,
    price: 2890,
    image: images.reset,
    gallery: [images.reset, images.forestLight, images.hills],
    categories: ['גוף ונפש', 'התחדשות', 'טבע'],
    remainingSpots: 6,
    capacity: 16,
    schedule: [
      {
        day: 'יום חמישי',
        items: [
          { time: '14:00', title: 'התכנסות, קבלת חדרים וזמן להתיישב' },
          { time: '16:00', title: 'פתיחת הריטריט ומעגל היכרות עדין' },
          { time: '17:30', title: 'תנועה רכה ופתיחת גוף' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'מעגל ערב וסגירת יום' },
        ],
      },
      {
        day: 'יום שישי',
        items: [
          { time: '07:30', title: 'תרגול בוקר בטבע' },
          { time: '09:00', title: 'ארוחת בוקר' },
          { time: '11:00', title: 'סדנה: גוף, נשימה והאטה' },
          { time: '13:00', title: 'ארוחת צהריים' },
          { time: '15:30', title: 'הליכה שקטה בין העצים' },
          { time: '18:00', title: 'מדיטציה מודרכת' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'זמן חופשי / שקט' },
        ],
      },
      {
        day: 'יום שבת',
        items: [
          { time: '07:30', title: 'תרגול בוקר' },
          { time: '09:00', title: 'ארוחת בוקר' },
          { time: '10:30', title: 'סדנה: מה עושים עם מה שעולה' },
          { time: '13:00', title: 'ארוחת צהריים' },
          { time: '14:30', title: 'זמן אישי, מנוחה או שהייה בחוץ' },
          { time: '17:30', title: 'תנועה עדינה וסגירת גוף' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'מעגל שיתוף פתוח' },
        ],
      },
      {
        day: 'יום ראשון',
        items: [
          { time: '07:30', title: 'תרגול סיום קצר' },
          { time: '09:00', title: 'ארוחת בוקר' },
          { time: '10:30', title: 'מעגל סגירה וחזרה לשגרה' },
          { time: '12:00', title: 'סיום הריטריט ויציאה' },
        ],
      },
    ],
    included: [
      { key: 'lodging', title: 'לינה', text: 'שלושה לילות בחדרים שקטים בסביבה כפרית' },
      { key: 'meals', title: 'ארוחות', text: 'ארוחות מלאות לאורך כל ימי הריטריט' },
      { key: 'practices', title: 'תרגולים', text: 'תנועה עדינה, נשימה ומדיטציה בכל יום' },
      { key: 'workshops', title: 'סדנאות', text: 'מפגשים מודרכים על האטה וחיבור לגוף' },
      { key: 'guidance', title: 'הנחיה', text: 'הנחיה של שהם דודיק לאורך הימים, בקבוצה קטנה' },
      { key: 'nature', title: 'פעילויות בטבע', text: 'הליכות שקטות ושהייה בין ההרים' },
      { key: 'freeTime', title: 'זמן חופשי', text: 'שעות פנויות למנוחה, כתיבה או שקט' },
    ],
    suitableFor: [
      'למי שמרגיש צורך לעצור',
      'למי שרוצה להתחבר לגוף בלי מאמץ',
      'למתחילים ולמי שזו הפעם הראשונה בריטריט',
      'למי שמחפש זמן לעצמו',
      'למי שאוהב טבע וקצב איטי',
    ],
    reviews: [
      {
        id: 'reset-noa',
        name: 'נועה',
        city: 'תל אביב',
        rating: 5,
        text: 'לקח לי יומיים עד שהראש באמת נרגע. מהרגע הזה והלאה הכל היה פשוט שקט. יצאתי עם תחושה שיש לי מקום לחזור אליו.',
      },
      {
        id: 'reset-itai',
        name: 'איתי',
        city: 'רעננה',
        rating: 4,
        text: 'באתי לבד וזה היה בסדר גמור. לא הרגשתי לחץ להיות חברותי, וגם לא לבד לגמרי. האוכל והקצב עשו את שלהם.',
      },
    ],
    faq: [
      sharedFaq.experience,
      sharedFaq.price,
      sharedFaq.beginners,
      sharedFaq.packing,
      sharedFaq.location,
      sharedFaq.alone,
      sharedFaq.cancel,
      sharedFaq.meals,
    ],
    seoTitle: 'TAVA Reset – ריטריט גוף ונפש בהרי ירושלים',
    seoDescription:
      'ריטריט גוף ונפש בהרי ירושלים, 22–25 באוקטובר 2026. ארבעה ימים של שקט, תנועה עדינה, מדיטציה וזמן לעצמכם.',
  },
  {
    id: 'flow',
    title: 'TAVA Flow – ריטריט יוגה ומיינדפולנס',
    slug: 'tava-flow',
    shortName: 'TAVA Flow',
    shortDescription:
      'סוף שבוע בגליל סביב יוגה, נשימה ומדיטציה. ירוק מסביב, קצב רך ומקום אמיתי לעצמכם.',
    description: [
      'TAVA Flow הוא ריטריט סוף שבוע למי שרוצה לנוע, לנשום ולעצור בלי לצאת לשבוע שלם. שלושה ימים בגליל, במקום מוקף עצים ושדות, עם תרגול יוגה בכל בוקר ובכל ערב.',
      'התרגולים משלבים תנועה זורמת עם שהייה, נשימות פשוטות ומדיטציה קצרה. אין צורך בגמישות מיוחדת ואין תחרות בשטיח. כל אחד עובד עם הגוף שהגיע איתו.',
      'בין התרגולים יש זמן חופשי אמיתי: לשבת בחוץ, לישון עוד קצת, לשוחח או פשוט לא לעשות כלום. זה חלק מהתרגול, לא משהו שנשאר מחוץ לתוכנית.',
      'Flow מתאים גם למי שכבר על השטיח וגם למי שרוצה להתחיל לאט, במקום יפה ועם אנשים שנמצאים באותו מצב רוח.',
    ],
    location: 'הגליל',
    locationNote,
    facilitator: 'שהם דודיק',
    date: '2026-11-20',
    endDate: '2026-11-22',
    duration: '3 ימים · 2 לילות',
    nights: 2,
    days: 3,
    price: 2450,
    image: images.flow,
    gallery: [images.flow, images.yogaField, images.mist],
    categories: ['יוגה', 'מיינדפולנס', 'סופ״ש', 'טבע'],
    remainingSpots: 4,
    capacity: 14,
    schedule: [
      {
        day: 'יום שישי',
        items: [
          { time: '15:00', title: 'התכנסות וקבלת חדרים' },
          { time: '16:30', title: 'פתיחת הריטריט ותרגול היכרות עם הגוף' },
          { time: '18:30', title: 'יוגה ערב רכה' },
          { time: '20:00', title: 'ארוחת ערב' },
          { time: '21:30', title: 'מדיטציית יין וסגירת יום' },
        ],
      },
      {
        day: 'יום שבת',
        items: [
          { time: '07:15', title: 'יוגת בוקר זורמת' },
          { time: '09:00', title: 'ארוחת בוקר' },
          { time: '10:30', title: 'סדנת נשימה ומיינדפולנס' },
          { time: '13:00', title: 'ארוחת צהריים' },
          { time: '15:00', title: 'זמן חופשי / שהייה בטבע' },
          { time: '17:30', title: 'תרגול תנועה ומדיטציה' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'מעגל שקט' },
        ],
      },
      {
        day: 'יום ראשון',
        items: [
          { time: '07:30', title: 'יוגת בוקר וסגירת תרגול' },
          { time: '09:00', title: 'ארוחת בוקר' },
          { time: '10:30', title: 'תרגול קצר לחזרה הביתה' },
          { time: '11:45', title: 'סיום ויציאה' },
        ],
      },
    ],
    included: [
      { key: 'lodging', title: 'לינה', text: 'שני לילות בחדרים נעימים בגליל' },
      { key: 'meals', title: 'ארוחות', text: 'ארוחות מלאות משישי בערב עד ראשון בבוקר' },
      { key: 'practices', title: 'תרגולים', text: 'יוגה, נשימה ומדיטציה לאורך הסופ״ש' },
      { key: 'workshops', title: 'סדנאות', text: 'מפגש מודרך על נוכחות ומיינדפולנס' },
      { key: 'guidance', title: 'הנחיה', text: 'הנחיה של שהם דודיק בקבוצה קטנה ואישית' },
      { key: 'nature', title: 'פעילויות בטבע', text: 'שהייה בחוץ וזמן שקט בין העצים' },
      { key: 'freeTime', title: 'זמן חופשי', text: 'שעות פתוחות למנוחה או תרגול עצמי' },
    ],
    suitableFor: [
      'למי שאוהב יוגה ורוצה כמה ימים ברצף',
      'למתחילים שרוצים להתחיל בלי לחץ',
      'למתרגלים מנוסים שמחפשים קצב רך יותר',
      'למי שרוצה סופ״ש של נוכחות ולא של עומס',
      'למי שנמשך לטבע ירוק ולקהילה קטנה',
    ],
    reviews: [
      {
        id: 'flow-yonatan',
        name: 'יונתן',
        city: 'חיפה',
        rating: 5,
        text: 'היוגה הייתה מדויקת, בלי הצגה. הרגשתי בנוח גם בלי ניסיון גדול. האוכל, האנשים והקצב היו במקום הנכון.',
      },
      {
        id: 'flow-shiri',
        name: 'שירי',
        city: 'באר שבע',
        rating: 5,
        text: 'סוף שבוע שעשה סדר. חזרתי הביתה עם שינה טובה יותר ועם כמה תרגולים פשוטים שאני באמת ממשיכה איתם.',
      },
    ],
    faq: [
      sharedFaq.experience,
      sharedFaq.price,
      {
        question: 'האם הריטריט מתאים למתחילים?',
        answer:
          'כן. יש הנחיות ברורות לכל תרגול, ואפשר תמיד לבחור גרסה עדינה יותר. אף אחד לא בודק כמה עמוק אתם נכנסים לתנוחה.',
      },
      sharedFaq.packing,
      sharedFaq.location,
      sharedFaq.alone,
      sharedFaq.cancel,
      sharedFaq.meals,
    ],
    seoTitle: 'TAVA Flow – ריטריט יוגה ומיינדפולנס בגליל',
    seoDescription:
      'ריטריט יוגה ומיינדפולנס בגליל, 20–22 בנובמבר 2026. סוף שבוע של תנועה, נשימה, מדיטציה וטבע ירוק.',
  },
  {
    id: 'desert',
    title: 'TAVA Desert – ריטריט התחדשות במדבר',
    slug: 'tava-desert',
    shortName: 'TAVA Desert',
    shortDescription:
      'ארבעה ימים במדבר יהודה: מרחב, שקט, האטה ותרגול שמחזיר פנימה. פחות מילים, יותר אוויר.',
    description: [
      'TAVA Desert הוא הריטריט השקט יותר שלנו. המדבר לא דורש הרבה הסברים. יש בו מרחב, אור וזמן שנמתח אחרת מאשר בעיר.',
      'ארבעה ימים במדבר יהודה, עם תרגול בוקר, הליכות קצרות, זמן לבד ומעגלים שלא ממלאים את החלל במילים מיותרות. יש תוכן, אבל הוא משאיר מקום למה שקורה בפנים.',
      'הימים מתחילים מוקדם ונגמרים לאט. בין לבין יש שעות של שהייה, כתיבה או פשוט ישיבה מול הנוף. לא כולם אוהבים את השקט הזה מיד. בדרך כלל, ביום השני, משהו נפתח.',
      'Desert מתאים למי שמרגיש שהגיע הזמן להתחדש באמת — לא דרך עוד גירוי, אלא דרך הפחתה.',
    ],
    location: 'מדבר יהודה',
    locationNote,
    facilitator: 'שהם דודיק',
    date: '2027-01-07',
    endDate: '2027-01-10',
    duration: '4 ימים · 3 לילות',
    nights: 3,
    days: 4,
    price: 3190,
    image: images.desert,
    gallery: [images.desert, images.sunrise, images.hills],
    categories: ['התחדשות', 'מיינדפולנס', 'טבע'],
    remainingSpots: 8,
    capacity: 12,
    schedule: [
      {
        day: 'יום חמישי',
        items: [
          { time: '14:30', title: 'הגעה, קבלת חדרים והתארגנות' },
          { time: '16:30', title: 'פתיחה והיכרות עם המרחב' },
          { time: '17:30', title: 'ישיבה מול השקיעה' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'הזמנה לשקט ולילה ראשון' },
        ],
      },
      {
        day: 'יום שישי',
        items: [
          { time: '06:45', title: 'הליכת בוקר קצרה במדבר' },
          { time: '08:30', title: 'ארוחת בוקר' },
          { time: '10:00', title: 'סדנה: האטה והתבוננות' },
          { time: '13:00', title: 'ארוחת צהריים' },
          { time: '15:30', title: 'זמן לבד בנוף' },
          { time: '17:30', title: 'תרגול תנועה עדין' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'מעגל ערב קצר' },
        ],
      },
      {
        day: 'יום שבת',
        items: [
          { time: '07:00', title: 'תרגול בוקר ומדיטציה' },
          { time: '09:00', title: 'ארוחת בוקר' },
          { time: '10:30', title: 'סדנה: מה רוצים לקחת מכאן' },
          { time: '13:00', title: 'ארוחת צהריים' },
          { time: '14:30', title: 'זמן חופשי ומנוחה' },
          { time: '17:00', title: 'הליכה שקטה לשעת בין ערביים' },
          { time: '19:30', title: 'ארוחת ערב' },
          { time: '21:00', title: 'מעגל שיתוף' },
        ],
      },
      {
        day: 'יום ראשון',
        items: [
          { time: '06:50', title: 'ישיבת זריחה' },
          { time: '08:30', title: 'ארוחת בוקר' },
          { time: '10:00', title: 'סגירה ופרידה' },
          { time: '11:30', title: 'יציאה' },
        ],
      },
    ],
    included: [
      { key: 'lodging', title: 'לינה', text: 'שלושה לילות במקום שקט במדבר יהודה' },
      { key: 'meals', title: 'ארוחות', text: 'ארוחות חמות ופשוטות לאורך כל הריטריט' },
      { key: 'practices', title: 'תרגולים', text: 'מדיטציה, תנועה עדינה וישיבות שקט' },
      { key: 'workshops', title: 'סדנאות', text: 'מפגשים על האטה, התבוננות והתחדשות' },
      { key: 'guidance', title: 'הנחיה', text: 'הנחיה של שהם דודיק בקבוצה קטנה במיוחד' },
      { key: 'nature', title: 'פעילויות בטבע', text: 'הליכות מדבר, זריחה ושקיעה בחוץ' },
      { key: 'freeTime', title: 'זמן חופשי', text: 'שעות לבד, למנוחה או לכתיבה' },
    ],
    suitableFor: [
      'למי שמחפש שקט עמוק יותר',
      'למי שרוצה התחדשות בלי עומס תוכן',
      'למי שאוהב מרחבים ונוף פתוח',
      'למתרגלים ולמתחילים כאחד',
      'למי שמוכן לכמה ימים עם פחות מסכים',
    ],
    reviews: [
      {
        id: 'desert-michal',
        name: 'מיכל',
        city: 'ירושלים',
        rating: 5,
        text: 'המדבר עושה משהו אחר. פחות מילים, יותר מרחב. לא ציפיתי לצאת כל כך רגועה, וגם לא כל כך פנויה.',
      },
      {
        id: 'desert-omer',
        name: 'עומר',
        city: 'מודיעין',
        rating: 4,
        text: 'בהתחלה היה לי קשה עם השקט. ביום השני כבר לא רציתי שיחות קטנות. יצאתי עם בהירות שלא הייתה לי הרבה זמן.',
      },
    ],
    faq: [
      sharedFaq.experience,
      sharedFaq.price,
      sharedFaq.beginners,
      {
        question: 'מה צריך להביא?',
        answer:
          'בגדים לשכבות, כובע, נעלי הליכה סגורות, קרם הגנה, בקבוק מים גדול ופנס. במדבר הימים יכולים להיות חמימים והלילות קרירים.',
      },
      sharedFaq.location,
      sharedFaq.alone,
      sharedFaq.cancel,
      sharedFaq.meals,
    ],
    seoTitle: 'TAVA Desert – ריטריט התחדשות במדבר יהודה',
    seoDescription:
      'ריטריט התחדשות במדבר יהודה, 7–10 בינואר 2027. ארבעה ימים של שקט, מרחב, תרגול והתבוננות פנימה.',
  },
]

export const calendarBounds = {
  start: { year: 2026, month: 9 },
  end: { year: 2027, month: 0 },
}

export function getRetreatBySlug(slug: string): Retreat | undefined {
  return retreats.find((retreat) => retreat.slug === slug)
}

export function getRetreatsByCategory(category: string): Retreat[] {
  if (category === 'כל הריטריטים') return retreats
  return retreats.filter((retreat) =>
    retreat.categories.includes(category as Retreat['categories'][number]),
  )
}

export function getRetreatsOnDate(date: Date): Retreat[] {
  return retreats.filter((retreat) => isDateInRange(date, retreat.date, retreat.endDate))
}

export function getAllReviews() {
  return retreats.flatMap((retreat) =>
    retreat.reviews.map((review) => ({
      ...review,
      retreatTitle: retreat.shortName,
      retreatSlug: retreat.slug,
    })),
  )
}
