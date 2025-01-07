export const Footer: React.FC = () => {
  return (
    <footer className="border-grid border-t md:px-8 md:py-0">
      <div className="container-wrapper">
        <div className="container py-3">
          <div className="text-balance text-center text-muted-foreground text-xs md:text-sm font-medium">
            Copyright &copy; {new Date().getFullYear()} Navīkaraṇa Labs. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
