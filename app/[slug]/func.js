import fs from "fs";
import path from "path";

export async function getServerSideProps({ params }) {
    const pagesDir = path.join(process.cwd(), "pages");
    const pagePath = path.join(pagesDir, `${params.slug}.js`);
  
    let pageExists = false;
    try {
      await fs.promises.access(pagePath, fs.constants.F_OK);
      pageExists = true;
    } catch (err) {
      pageExists = false;
    }
  
    return {
      props: {
        pageExists,
        slug: params.slug,
      },
    };
  }
  