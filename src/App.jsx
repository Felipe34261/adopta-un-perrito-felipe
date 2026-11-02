import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header';
import MyCard from './components/mycard';
import Footer from './components/footer';

function App() {
  return (
    <div className="container my-4">
      <Header title="Adopta un perrito" />

      <main className="row g-4 justify-content-center">
        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <MyCard
            image="https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&w=600"
            name="Bartolo"
            description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
            tagText="Husky"
            tagColor="success"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <MyCard
            image="https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?auto=compress&cs=tinysrgb&w=600"
            name="Messi"
            description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
            tagText="Bobtail"
            tagColor="primary"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <MyCard
            image="https://images.pexels.com/photos/4587998/pexels-photo-4587998.jpeg?auto=compress&cs=tinysrgb&w=600"
            name="Gohan"
            description="Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
            tagText="Shar Pei"
            tagColor="danger"
          />
        </div>

        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
          <MyCard
            image="https://images.pexels.com/photos/1000602/pexels-photo-1000602.jpeg?auto=compress&cs=tinysrgb&w=600"
            name="Princesa"
            description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
            tagText="Beagle"
            tagColor="warning"
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;