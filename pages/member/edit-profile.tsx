import Image from 'next/image';
import Input from '../../components/atoms/Input';
import Sidebar from '../../components/organism/Sidebar';

export default function EditProfile() {
  return (
    <section className="edit-profile overflow-auto">
      <Sidebar activeMenu="settings" />
      <main className="main-wrapper">
        <div className="ps-lg-0">
          <h2 className="text-4xl fw-bold color-palette-1 mb-30">Settings</h2>
          <div className="bg-card pt-30 ps-30 pe-30 pb-30">
            <form action="">
              <div className="photo d-flex">
                <div className="position-relative me-20">
                  <img src="/img/avatar-1.png" width="90" height="90" className="avatar img-fluid" alt="avatar" />
                  <div
                    className="avatar-overlay position-absolute top-0 d-flex justify-content-center align-items-center"
                  >
                    <img src="/icon/avatar-overlay.svg " width="24" height="24" alt="upload" />
                  </div>
                </div>
                <div className="image-upload">
                  <label htmlFor="avatar">
                    <Image src="/icon/upload.svg" width={90} height={90} alt="upload icon" />
                    <input id="avatar" type="file" name="avatar" accept="image/png, image/jpeg" />
                  </label>
                </div>
              </div>
              <div className="pt-30">
                <Input label="Full Name" placeholder="Enter Your Name" />
              </div>
              <div className="pt-30">
                <Input label="Email Address" placeholder="Enter Your Email Address" />
              </div>
              <div className="pt-30">
                <Input label="Phone" placeholder="Enter Your Phone Number" />
              </div>
              <div className="button-group d-flex flex-column pt-50">
                <button
                  role="link"
                  type="submit"
                  className="btn btn-save fw-medium text-lg text-white rounded-pill"
                >
                  Save My Profile
                </button>
              </div>
            </form>

          </div>

        </div>

      </main>
    </section>
  );
}
