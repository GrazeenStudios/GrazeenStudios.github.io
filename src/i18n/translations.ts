export type Language = "en" | "tr";

export interface Capability {
  title: string;
  text: string;
  status: "working" | "inDevelopment";
}

export interface Step {
  label: string;
  title: string;
  text: string;
}

export interface Translation {
  htmlLanguage: string;
  pageTitle: string;
  pageDescription: string;
  navProduct: string;
  navHowItWorks: string;
  navAbout: string;
  navContact: string;
  switchLanguageLabel: string;
  switchLanguageName: string;
  heroEyebrow: string;
  heroTitle: string;
  heroText: string;
  heroPrimaryButton: string;
  heroSecondaryButton: string;
  productTitle: string;
  productIntro: string;
  statusWorking: string;
  statusInDevelopment: string;
  capabilities: Capability[];
  howTitle: string;
  howIntro: string;
  steps: Step[];
  howNote: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  contactTitle: string;
  contactIntro: string;
  formName: string;
  formEmail: string;
  formOrganisation: string;
  formMessage: string;
  formMessagePlaceholder: string;
  formSubmit: string;
  formPrivacy: string;
  formUnavailable: string;
  footerRights: string;
}

export const translations: Record<Language, Translation> = {
  en: {
    htmlLanguage: "en",
    pageTitle: "Grazeen Studios | Disko drone inspection platform",
    pageDescription:
      "Disko connects drone patrols with evidence-based decisions: predefined routes, live mission monitoring, human-reviewed findings and recorded notifications.",
    navProduct: "Product",
    navHowItWorks: "How it works",
    navAbout: "About",
    navContact: "Contact",
    switchLanguageLabel: "Türkçe",
    switchLanguageName: "Switch to Turkish",
    heroEyebrow: "Disko by Grazeen Studios",
    heroTitle: "From drone patrol to a decision you can trust.",
    heroText:
      "Disko sends a drone along a predefined route, follows the flight live, and turns the images it collects into findings that a person reviews before anyone is notified. Built first for overhead power line inspection.",
    heroPrimaryButton: "Request a demo",
    heroSecondaryButton: "See how it works",
    productTitle: "One platform, from dispatch to record",
    productIntro:
      "Disko covers the full patrol: planning and flying the route, collecting evidence, reviewing it, and keeping the record.",
    statusWorking: "Working",
    statusInDevelopment: "In development",
    capabilities: [
      {
        title: "Route dispatch and live monitoring",
        text: "Pick a connected drone and a predefined corridor, check readiness, start the mission, and follow state, progress and connection health on the dashboard.",
        status: "working",
      },
      {
        title: "Flight history and telemetry",
        text: "Every flight is kept: where the drone went, what it reported, and when. Review a patrol long after it ended.",
        status: "working",
      },
      {
        title: "Evidence-based findings",
        text: "Images are evaluated on the server for possible defects such as damaged insulators, corrosion or bird nests. A result is a candidate finding, never a confirmed defect.",
        status: "inDevelopment",
      },
      {
        title: "Human approval before notification",
        text: "A person checks the evidence, location, message and recipients. Nothing is sent until it is approved, and every delivery outcome is recorded.",
        status: "inDevelopment",
      },
    ],
    howTitle: "How it works",
    howIntro: "Four stages, with a person in control of the one that matters.",
    steps: [
      {
        label: "01 / Aircraft",
        title: "Patrol and capture",
        text: "The drone flies a predefined route. Original images stay onboard until you remove them.",
      },
      {
        label: "02 / Server",
        title: "Evaluate evidence",
        text: "The Server looks for possible defects and creates a candidate finding.",
      },
      {
        label: "03 / Human",
        title: "Review the action",
        text: "A reviewer checks the original image, location, message and recipients.",
      },
      {
        label: "04 / Delivery",
        title: "Notify and record",
        text: "Approved actions are sent by email, SMS or an external API, and every outcome is tracked.",
      },
    ],
    howNote:
      "Disko is built simulation first: everything that does not need physical hardware is finished and tested against realistic simulations before it is flown.",
    aboutTitle: "About Grazeen Studios",
    aboutParagraphs: [
      "Grazeen Studios builds software for drone-based inspection. Our first product, Disko, starts with electrical grid inspection and is designed to extend to other inspection needs, such as forest smoke and fire detection, without rebuilding flight control and monitoring.",
      "We are at prototype stage and are talking to utilities, inspection companies and investors. If that sounds like you, we would like to hear from you.",
    ],
    contactTitle: "Request a demo",
    contactIntro:
      "Tell us a little about your inspection work and we will get back to you by email.",
    formName: "Your name",
    formEmail: "Email",
    formOrganisation: "Organisation",
    formMessage: "What would you like to see?",
    formMessagePlaceholder: "For example: line inspection for a regional utility",
    formSubmit: "Send request",
    formPrivacy:
      "We use your details only to answer this request. No newsletters, no sharing.",
    formUnavailable:
      "The request form is not connected yet. Please check back soon.",
    footerRights: "All rights reserved.",
  },
  tr: {
    htmlLanguage: "tr",
    pageTitle: "Grazeen Studios | Disko drone denetim platformu",
    pageDescription:
      "Disko, drone devriyelerini kanıta dayalı kararlara bağlar: önceden tanımlı rotalar, canlı görev takibi, insan onaylı bulgular ve kayıt altına alınan bildirimler.",
    navProduct: "Ürün",
    navHowItWorks: "Nasıl çalışır",
    navAbout: "Hakkımızda",
    navContact: "İletişim",
    switchLanguageLabel: "English",
    switchLanguageName: "İngilizceye geç",
    heroEyebrow: "Grazeen Studios'tan Disko",
    heroTitle: "Drone devriyesinden güvenebileceğiniz bir karara.",
    heroText:
      "Disko, bir dronu önceden tanımlı bir rota boyunca gönderir, uçuşu canlı izler ve topladığı görüntüleri, kimseye bildirim gitmeden önce bir kişinin incelediği bulgulara dönüştürür. İlk olarak havai enerji hattı denetimi için geliştirildi.",
    heroPrimaryButton: "Demo talep et",
    heroSecondaryButton: "Nasıl çalıştığını gör",
    productTitle: "Görev atamasından kayda kadar tek platform",
    productIntro:
      "Disko devriyenin tamamını kapsar: rotayı planlamak ve uçurmak, kanıt toplamak, incelemek ve kaydı tutmak.",
    statusWorking: "Çalışıyor",
    statusInDevelopment: "Geliştiriliyor",
    capabilities: [
      {
        title: "Rota ataması ve canlı izleme",
        text: "Bağlı bir dron ve önceden tanımlı bir koridor seçin, hazırlığı kontrol edin, görevi başlatın; durumu, ilerlemeyi ve bağlantı sağlığını panelden izleyin.",
        status: "working",
      },
      {
        title: "Uçuş geçmişi ve telemetri",
        text: "Her uçuş saklanır: dronun nereye gittiği, ne bildirdiği ve ne zaman. Bir devriyeyi bittikten çok sonra bile inceleyin.",
        status: "working",
      },
      {
        title: "Kanıta dayalı bulgular",
        text: "Görüntüler sunucuda hasarlı izolatör, korozyon veya kuş yuvası gibi olası kusurlar için değerlendirilir. Sonuç aday bir bulgudur, asla doğrulanmış bir kusur değildir.",
        status: "inDevelopment",
      },
      {
        title: "Bildirimden önce insan onayı",
        text: "Bir kişi kanıtı, konumu, mesajı ve alıcıları kontrol eder. Onaylanmadan hiçbir şey gönderilmez ve her iletim sonucu kaydedilir.",
        status: "inDevelopment",
      },
    ],
    howTitle: "Nasıl çalışır",
    howIntro: "Dört aşama; önemli olanın kontrolü bir insanda.",
    steps: [
      {
        label: "01 / Hava aracı",
        title: "Devriye ve çekim",
        text: "Dron önceden tanımlı bir rotada uçar. Orijinal görüntüler siz silene kadar dronda kalır.",
      },
      {
        label: "02 / Sunucu",
        title: "Kanıtı değerlendir",
        text: "Sunucu olası kusurları arar ve aday bir bulgu oluşturur.",
      },
      {
        label: "03 / İnsan",
        title: "Eylemi incele",
        text: "Bir inceleyici orijinal görüntüyü, konumu, mesajı ve alıcıları kontrol eder.",
      },
      {
        label: "04 / İletim",
        title: "Bildir ve kaydet",
        text: "Onaylanan eylemler e-posta, SMS veya harici bir API ile gönderilir ve her sonuç izlenir.",
      },
    ],
    howNote:
      "Disko önce simülasyonla geliştirilir: fiziksel donanım gerektirmeyen her şey, uçurulmadan önce gerçekçi simülasyonlarda tamamlanır ve test edilir.",
    aboutTitle: "Grazeen Studios hakkında",
    aboutParagraphs: [
      "Grazeen Studios, drone tabanlı denetim için yazılım geliştirir. İlk ürünümüz Disko elektrik şebekesi denetimiyle başlar ve uçuş kontrolünü ve izlemeyi yeniden yazmadan orman dumanı ve yangın tespiti gibi diğer denetim ihtiyaçlarına genişleyecek şekilde tasarlanmıştır.",
      "Prototip aşamasındayız ve enerji şirketleri, denetim firmaları ve yatırımcılarla görüşüyoruz. Bu sizseniz, sizden haber almak isteriz.",
    ],
    contactTitle: "Demo talep et",
    contactIntro:
      "Denetim işinizden kısaca bahsedin, size e-posta ile dönelim.",
    formName: "Adınız",
    formEmail: "E-posta",
    formOrganisation: "Kurum",
    formMessage: "Neyi görmek istersiniz?",
    formMessagePlaceholder: "Örneğin: bölgesel bir enerji şirketi için hat denetimi",
    formSubmit: "Talebi gönder",
    formPrivacy:
      "Bilgilerinizi yalnızca bu talebi yanıtlamak için kullanırız. Bülten yok, paylaşım yok.",
    formUnavailable:
      "Talep formu henüz bağlanmadı. Lütfen kısa süre sonra tekrar bakın.",
    footerRights: "Tüm hakları saklıdır.",
  },
};
