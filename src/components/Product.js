export default function Product(props) {

    return (
        <div key={props.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
                <img
                    src={props.imageSrc}
                    alt={props.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <a href={props.href}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {props.name}
                        </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">{props.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{props.price}</p>
            </div>
        </div>

        // <div className=" h-10 flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8 text-gray-900">
        // <img src="images/uploads/mv1.jpg" alt="" />
        // <div className="text-gray-900">
        //     <h6>
        //     <a href="moviesingle.html"/> 
        //     {props.titulo}
        //     </h6>
        //     <p className="text-gray-900">
        //         <i className="text-gray-900"></i>
        //         <span>{props.calificacion}</span> /10
        //         </p>
        //     <p className="text-gray-900">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
        //     <p className="text-gray-900"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
        //     <p>Director: <a href="#">Joss Whedon</a></p>
        //     <p>Stars: <a href="#">Robert Downey Jr.,</a> <a href="#">Chris Evans,</a> <a href="#">  Chris Hemsworth</a></p>
        // </div>
        // </div>
    )

}