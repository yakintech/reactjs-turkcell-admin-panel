import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    en: {
        translation: {
            "Home": "Home",
            "Products": "Products",
            "Favorites": "Favorites",
            "ProductsLength": "Products Length",
            "Add": "Add",
            "Detail": "Detail",
            "Delete": "Delete",
            "RemoveFromFavorites": "Remove from Fav",
            "AddToFavorites": "Add to Fav",
            "Categories": "Categories",
            "Suppliers": "Suppliers"
        }
    },
    tr: {
        translation: {
            "Home": "Anasayfa",
            "Products": "Ürünler",
            "Favorites": "Favoriler",
            "ProductsLength": "Ürün Adedi",
            "Add": "Ekle",
            "Detail": "Detay",
            "Delete": "Sil",
            "RemoveFromFavorites": "Favorilerden Çıkar",
            "AddToFavorites": "Favorilere Ekle",
            "Categories": "Kategoriler",
            "Suppliers": "Tedarikçiler"
        }
    },
    fr: {
        translation: {
            "Home": "Accueil",
            "Products": "Produits",
            "Favorites": "Favoris",
            "ProductsLength": "Nombre de produits",
            "Add": "Ajouter",
            "Detail": "Détail",
            "Delete": "Effacer",
            "RemoveFromFavorites": "Retirer des favoris",
            "AddToFavorites": "Ajouter aux favoris",
            "Categories": "Catégories",
            "Suppliers":"Fournisseurs"
        }
    }
};

let lang = localStorage.getItem("i18lang")

if (!lang) {
    lang = "en"
}

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: lang,
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;